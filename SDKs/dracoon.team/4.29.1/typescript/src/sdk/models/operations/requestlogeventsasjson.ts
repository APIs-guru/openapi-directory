import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestLogEventsAsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_client" })
  userClient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class RequestLogEventsAsJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestLogEventsAsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestLogEventsAsJsonQueryParams;

  @Metadata()
  headers: RequestLogEventsAsJsonHeaders;
}


export class RequestLogEventsAsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  logEventList?: shared.LogEventList;

  @Metadata()
  statusCode: number;
}
