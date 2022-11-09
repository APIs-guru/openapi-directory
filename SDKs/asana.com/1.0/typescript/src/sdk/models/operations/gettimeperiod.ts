import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTimePeriodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=time_period_gid" })
  timePeriodGid: string;
}


export class GetTimePeriodQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTimePeriodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimePeriodPathParams;

  @Metadata()
  queryParams: GetTimePeriodQueryParams;
}


export class GetTimePeriod200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TimePeriodResponse;
}


export class GetTimePeriodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTimePeriod200ApplicationJsonObject?: GetTimePeriod200ApplicationJson;
}
