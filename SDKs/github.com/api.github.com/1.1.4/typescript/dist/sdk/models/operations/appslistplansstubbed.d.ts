import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListPlansStubbedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListPlansStubbedRequest extends SpeakeasyBase {
    queryParams: AppsListPlansStubbedQueryParams;
}
export declare class AppsListPlansStubbedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    marketplaceListingPlans?: shared.MarketplaceListingPlan[];
}
