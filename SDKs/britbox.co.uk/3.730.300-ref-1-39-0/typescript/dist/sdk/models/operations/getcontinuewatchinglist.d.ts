import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContinueWatchingListIncludeEnum {
    Episode = "episode",
    Season = "season",
    Show = "show"
}
export declare enum GetContinueWatchingListShowItemTypeEnum {
    Episode = "episode",
    Season = "season",
    Show = "show"
}
export declare class GetContinueWatchingListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    include?: GetContinueWatchingListIncludeEnum[];
    lang?: string;
    maxRating?: string;
    page?: number;
    pageSize?: number;
    segments?: string[];
    showItemType?: GetContinueWatchingListShowItemTypeEnum;
    sub?: string;
}
export declare class GetContinueWatchingListSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetContinueWatchingListRequest extends SpeakeasyBase {
    queryParams: GetContinueWatchingListQueryParams;
    security: GetContinueWatchingListSecurity;
}
export declare class GetContinueWatchingListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
