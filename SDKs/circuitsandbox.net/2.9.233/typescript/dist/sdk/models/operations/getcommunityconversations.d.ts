import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommunityConversationsOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum GetCommunityConversationsSortEnum {
    Alphabetically = "ALPHABETICALLY",
    RecentActivity = "RECENT_ACTIVITY",
    Popularity = "POPULARITY"
}
export declare class GetCommunityConversationsQueryParams extends SpeakeasyBase {
    includeOwn?: boolean;
    order?: GetCommunityConversationsOrderEnum;
    results?: number;
    sort?: GetCommunityConversationsSortEnum;
    startIndex?: number;
}
export declare class GetCommunityConversationsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetCommunityConversationsRequest extends SpeakeasyBase {
    queryParams: GetCommunityConversationsQueryParams;
    security: GetCommunityConversationsSecurity;
}
export declare class GetCommunityConversationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversations?: any[];
    statusCode: number;
}
