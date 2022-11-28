import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemRatingPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetItemRatingQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetItemRatingSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetItemRatingRequest extends SpeakeasyBase {
    pathParams: GetItemRatingPathParams;
    queryParams: GetItemRatingQueryParams;
    security: GetItemRatingSecurity;
}
export declare class GetItemRatingResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    userRating?: shared.UserRating;
}
