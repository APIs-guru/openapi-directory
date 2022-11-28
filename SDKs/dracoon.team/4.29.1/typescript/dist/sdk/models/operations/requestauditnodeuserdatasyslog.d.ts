import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAuditNodeUserDataSyslogQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestAuditNodeUserDataSyslogHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestAuditNodeUserDataSyslogRequest extends SpeakeasyBase {
    queryParams: RequestAuditNodeUserDataSyslogQueryParams;
    headers: RequestAuditNodeUserDataSyslogHeaders;
}
export declare class RequestAuditNodeUserDataSyslogResponse extends SpeakeasyBase {
    auditNodeResponses?: shared.AuditNodeResponse[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
