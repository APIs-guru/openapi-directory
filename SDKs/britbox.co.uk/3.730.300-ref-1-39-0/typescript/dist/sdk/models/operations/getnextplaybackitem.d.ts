import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNextPlaybackItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare enum GetNextPlaybackItemExpandEnum {
    Parent = "parent",
    Ancestors = "ancestors"
}
export declare class GetNextPlaybackItemQueryParams extends SpeakeasyBase {
    device?: string;
    expand?: GetNextPlaybackItemExpandEnum;
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    maxRating?: string;
    segments?: string[];
    sub?: string;
}
export declare class GetNextPlaybackItemSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetNextPlaybackItemRequest extends SpeakeasyBase {
    pathParams: GetNextPlaybackItemPathParams;
    queryParams: GetNextPlaybackItemQueryParams;
    security: GetNextPlaybackItemSecurity;
}
export declare class GetNextPlaybackItemResponse extends SpeakeasyBase {
    contentType: string;
    nextPlaybackItem?: shared.NextPlaybackItem;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
