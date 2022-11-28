import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuditPrimaryCategoryQueryParams extends SpeakeasyBase {
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
export declare class GetAuditPrimaryCategoryRequest extends SpeakeasyBase {
    queryParams: GetAuditPrimaryCategoryQueryParams;
}
export declare class GetAuditPrimaryCategoryResponse extends SpeakeasyBase {
    auditPrimaryCategoryPage?: shared.AuditPrimaryCategoryPage;
    contentType: string;
    statusCode: number;
}
