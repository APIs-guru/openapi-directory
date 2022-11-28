import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListAccountsForPlanStubbedPathParams extends SpeakeasyBase {
    planId: number;
}
export declare enum AppsListAccountsForPlanStubbedDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class AppsListAccountsForPlanStubbedQueryParams extends SpeakeasyBase {
    direction?: AppsListAccountsForPlanStubbedDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.SortEnum;
}
export declare class AppsListAccountsForPlanStubbedRequest extends SpeakeasyBase {
    pathParams: AppsListAccountsForPlanStubbedPathParams;
    queryParams: AppsListAccountsForPlanStubbedQueryParams;
}
export declare class AppsListAccountsForPlanStubbedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    marketplacePurchases?: shared.MarketplacePurchase[];
}
