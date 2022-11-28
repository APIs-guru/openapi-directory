import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsGetAuditLogPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsGetAuditLogQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
    include?: shared.AuditLogIncludeEnum;
    order?: shared.AuditLogOrderEnum;
    page?: number;
    perPage?: number;
    phrase?: string;
}
export declare class OrgsGetAuditLogRequest extends SpeakeasyBase {
    pathParams: OrgsGetAuditLogPathParams;
    queryParams: OrgsGetAuditLogQueryParams;
}
export declare class OrgsGetAuditLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    auditLogEvents?: shared.AuditLogEvent[];
}
