import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTimePeriodsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_on" })
  endOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_on" })
  startOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetTimePeriodsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTimePeriodsQueryParams;
}


export class GetTimePeriods200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TimePeriodCompact })
  data?: shared.TimePeriodCompact[];
}


export class GetTimePeriodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTimePeriods200ApplicationJsonObject?: GetTimePeriods200ApplicationJson;
}
