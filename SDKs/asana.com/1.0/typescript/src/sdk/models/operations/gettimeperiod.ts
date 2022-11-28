import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTimePeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time_period_gid" })
  timePeriodGid: string;
}


export class GetTimePeriodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTimePeriod200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TimePeriodResponse;
}


export class GetTimePeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimePeriodPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTimePeriodQueryParams;
}


export class GetTimePeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTimePeriod200ApplicationJsonObject?: GetTimePeriod200ApplicationJson;
}
