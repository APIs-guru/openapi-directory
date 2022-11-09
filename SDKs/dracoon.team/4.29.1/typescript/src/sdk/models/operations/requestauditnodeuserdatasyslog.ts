import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAuditNodeUserDataSyslogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestAuditNodeUserDataSyslogHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestAuditNodeUserDataSyslogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestAuditNodeUserDataSyslogQueryParams;

  @Metadata()
  headers: RequestAuditNodeUserDataSyslogHeaders;
}


export class RequestAuditNodeUserDataSyslogResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AuditNodeResponse })
  auditNodeResponses?: shared.AuditNodeResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
