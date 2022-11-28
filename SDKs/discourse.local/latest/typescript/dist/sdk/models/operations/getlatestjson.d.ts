import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLatestJsonQueryParams extends SpeakeasyBase {
    ascending?: string;
    order?: string;
}
export declare class GetLatestJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetLatestJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetLatestJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
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
    posters?: GetLatestJson200ApplicationJsonTopicListTopicsPosters[];
    postsCount?: number;
    replyCount?: number;
    slug?: string;
    title?: string;
    unpinned?: string;
    unreadPosts?: number;
    unseen?: boolean;
    views?: number;
    visible?: boolean;
}
export declare class GetLatestJson200ApplicationJsonTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    topics?: GetLatestJson200ApplicationJsonTopicListTopics[];
}
export declare class GetLatestJson200ApplicationJsonUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetLatestJson200ApplicationJson extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetLatestJson200ApplicationJsonTopicList;
    users?: GetLatestJson200ApplicationJsonUsers[];
}
export declare class GetLatestJsonRequest extends SpeakeasyBase {
    queryParams: GetLatestJsonQueryParams;
    headers: GetLatestJsonHeaders;
}
export declare class GetLatestJsonResponse extends SpeakeasyBase {
    contentType: string;
    getLatestJson200ApplicationJsonObject?: GetLatestJson200ApplicationJson;
    statusCode: number;
}
