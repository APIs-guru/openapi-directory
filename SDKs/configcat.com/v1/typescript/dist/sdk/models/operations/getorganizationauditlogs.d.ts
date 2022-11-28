import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrganizationAuditlogsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAuditlogsQueryParams extends SpeakeasyBase {
    auditLogType?: Map<string, any>;
    configId?: string;
    environmentId?: string;
    fromUtcDateTime?: Date;
    productId?: string;
    toUtcDateTime?: Date;
}
export declare class GetOrganizationAuditlogsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationAuditlogsPathParams;
    queryParams: GetOrganizationAuditlogsQueryParams;
}
export declare class GetOrganizationAuditlogsResponse extends SpeakeasyBase {
    auditLogItemModels?: shared.AuditLogItemModel[];
    contentType: string;
    statusCode: number;
}
