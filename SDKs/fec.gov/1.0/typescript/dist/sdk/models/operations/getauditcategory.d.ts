import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuditCategoryQueryParams extends SpeakeasyBase {
    apiKey: string;
    page?: number;
    perPage?: number;
    primaryCategoryId?: string[];
    primaryCategoryName?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetAuditCategoryRequest extends SpeakeasyBase {
    queryParams: GetAuditCategoryQueryParams;
}
export declare class GetAuditCategoryResponse extends SpeakeasyBase {
    auditCategoryPage?: shared.AuditCategoryPage;
    contentType: string;
    statusCode: number;
}
