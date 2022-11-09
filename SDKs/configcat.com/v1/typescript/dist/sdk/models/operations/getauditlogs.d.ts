import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAuditlogsPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetAuditlogsQueryParams extends SpeakeasyBase {
    auditLogType?: Map<string, any>;
    configId?: string;
    environmentId?: string;
    fromUtcDateTime?: Date;
    toUtcDateTime?: Date;
}
export declare class GetAuditlogsRequest extends SpeakeasyBase {
    pathParams: GetAuditlogsPathParams;
    queryParams: GetAuditlogsQueryParams;
}
export declare class GetAuditlogsResponse extends SpeakeasyBase {
    auditLogItemModels?: shared.AuditLogItemModel[];
    contentType: string;
    statusCode: number;
}
