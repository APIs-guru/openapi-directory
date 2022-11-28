import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTopJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetTopJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTopJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
    archetype?: string;
    archived?: boolean;
    bookmarked?: boolean;
    bumped?: boolean;
    bumpedAt?: string;
    categoryId?: number;
    closed?: boolean;
    createdAt?: string;
    fancyTitle?: string;
    featuredLink?: string;
    hasSummary?: boolean;
    highestPostNumber?: number;
    id?: number;
    imageUrl?: string;
    lastPostedAt?: string;
    lastPosterUsername?: string;
    lastReadPostNumber?: number;
    likeCount?: number;
    liked?: boolean;
    notificationLevel?: number;
    opLikeCount?: number;
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: GetTopJson200ApplicationJsonTopicListTopicsPosters[];
    postsCount?: number;
    replyCount?: number;
    slug?: string;
    title?: string;
    unpinned?: boolean;
    unreadPosts?: number;
    unseen?: boolean;
    views?: number;
    visible?: boolean;
}
export declare class GetTopJson200ApplicationJsonTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    forPeriod?: string;
    perPage?: number;
    topics?: GetTopJson200ApplicationJsonTopicListTopics[];
}
export declare class GetTopJson200ApplicationJsonUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTopJson200ApplicationJson extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetTopJson200ApplicationJsonTopicList;
    users?: GetTopJson200ApplicationJsonUsers[];
}
export declare class GetTopJsonRequest extends SpeakeasyBase {
    headers: GetTopJsonHeaders;
}
export declare class GetTopJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTopJson200ApplicationJsonObject?: GetTopJson200ApplicationJson;
    statusCode: number;
}
