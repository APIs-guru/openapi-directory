import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAuditNodeUserDataQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestAuditNodeUserDataHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestAuditNodeUserDataRequest extends SpeakeasyBase {
    queryParams: RequestAuditNodeUserDataQueryParams;
    headers: RequestAuditNodeUserDataHeaders;
}
export declare class RequestAuditNodeUserDataResponse extends SpeakeasyBase {
    auditNodeResponses?: shared.AuditNodeResponse[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
