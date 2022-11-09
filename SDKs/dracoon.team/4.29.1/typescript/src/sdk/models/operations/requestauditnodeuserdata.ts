import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAuditNodeUserDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestAuditNodeUserDataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestAuditNodeUserDataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestAuditNodeUserDataQueryParams;

  @Metadata()
  headers: RequestAuditNodeUserDataHeaders;
}


export class RequestAuditNodeUserDataResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AuditNodeResponse })
  auditNodeResponses?: shared.AuditNodeResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
