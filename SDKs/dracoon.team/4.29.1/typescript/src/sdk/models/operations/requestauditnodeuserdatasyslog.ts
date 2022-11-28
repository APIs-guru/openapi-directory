import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAuditNodeUserDataSyslogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestAuditNodeUserDataSyslogHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestAuditNodeUserDataSyslogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestAuditNodeUserDataSyslogQueryParams;

  @SpeakeasyMetadata()
  headers: RequestAuditNodeUserDataSyslogHeaders;
}


export class RequestAuditNodeUserDataSyslogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AuditNodeResponse })
  auditNodeResponses?: shared.AuditNodeResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
