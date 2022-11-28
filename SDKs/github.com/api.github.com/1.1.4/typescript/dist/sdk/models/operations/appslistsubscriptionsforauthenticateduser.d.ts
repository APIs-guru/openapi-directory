import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListSubscriptionsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListSubscriptionsForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: AppsListSubscriptionsForAuthenticatedUserQueryParams;
}
export declare class AppsListSubscriptionsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    userMarketplacePurchases?: shared.UserMarketplacePurchase[];
}
