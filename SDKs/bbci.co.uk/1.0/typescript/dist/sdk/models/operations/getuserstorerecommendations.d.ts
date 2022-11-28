import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUserStoreRecommendationsQueryParams extends SpeakeasyBase {
    identityCookie: number;
}
export declare class GetUserStoreRecommendationsRequest extends SpeakeasyBase {
    queryParams: GetUserStoreRecommendationsQueryParams;
}
export declare class GetUserStoreRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
