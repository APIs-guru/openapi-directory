import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuditLogGetAuditLogPathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class AuditLogGetAuditLogQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
    include?: shared.AuditLogIncludeEnum;
    order?: shared.AuditLogOrderEnum;
    page?: number;
    perPage?: number;
    phrase?: string;
}
export declare class AuditLogGetAuditLogRequest extends SpeakeasyBase {
    pathParams: AuditLogGetAuditLogPathParams;
    queryParams: AuditLogGetAuditLogQueryParams;
}
export declare class AuditLogGetAuditLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    auditLogEvents?: shared.AuditLogEvent[];
}
