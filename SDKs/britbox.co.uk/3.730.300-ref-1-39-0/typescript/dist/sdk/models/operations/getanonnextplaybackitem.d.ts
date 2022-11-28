import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnonNextPlaybackItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare enum GetAnonNextPlaybackItemExpandEnum {
    Parent = "parent",
    Ancestors = "ancestors"
}
export declare class GetAnonNextPlaybackItemQueryParams extends SpeakeasyBase {
    device?: string;
    expand?: GetAnonNextPlaybackItemExpandEnum;
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    maxRating?: string;
    segments?: string[];
}
export declare class GetAnonNextPlaybackItemRequest extends SpeakeasyBase {
    pathParams: GetAnonNextPlaybackItemPathParams;
    queryParams: GetAnonNextPlaybackItemQueryParams;
}
export declare class GetAnonNextPlaybackItemResponse extends SpeakeasyBase {
    contentType: string;
    nextPlaybackItem?: shared.NextPlaybackItem;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
