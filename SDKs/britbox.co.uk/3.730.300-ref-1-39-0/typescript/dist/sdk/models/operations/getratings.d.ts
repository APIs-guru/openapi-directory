import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRatingsQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetRatingsSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetRatingsRequest extends SpeakeasyBase {
    queryParams: GetRatingsQueryParams;
    security: GetRatingsSecurity;
}
export declare class GetRatingsResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    getRatings200ApplicationJsonObject?: Map<string, number>;
}
