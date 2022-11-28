import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListSubscriptionsForAuthenticatedUserStubbedRequest extends SpeakeasyBase {
    queryParams: AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams;
}
export declare class AppsListSubscriptionsForAuthenticatedUserStubbedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    userMarketplacePurchases?: shared.UserMarketplacePurchase[];
}
