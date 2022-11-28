import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RateItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class RateItemQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    rating: number;
}
export declare class RateItemSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class RateItemRequest extends SpeakeasyBase {
    pathParams: RateItemPathParams;
    queryParams: RateItemQueryParams;
    security: RateItemSecurity;
}
export declare class RateItemResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    userRating?: shared.UserRating;
}
