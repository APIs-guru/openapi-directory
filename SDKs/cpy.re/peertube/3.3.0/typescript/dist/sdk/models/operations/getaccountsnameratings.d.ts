import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsNameRatingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum GetAccountsNameRatingsRatingEnum {
    Like = "like",
    Dislike = "dislike"
}
export declare class GetAccountsNameRatingsQueryParams extends SpeakeasyBase {
    count?: number;
    rating?: GetAccountsNameRatingsRatingEnum;
    sort?: string;
    start?: number;
}
export declare class GetAccountsNameRatingsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAccountsNameRatingsRequest extends SpeakeasyBase {
    pathParams: GetAccountsNameRatingsPathParams;
    queryParams: GetAccountsNameRatingsQueryParams;
    security: GetAccountsNameRatingsSecurity;
}
export declare class GetAccountsNameRatingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoRatings?: any[];
}
