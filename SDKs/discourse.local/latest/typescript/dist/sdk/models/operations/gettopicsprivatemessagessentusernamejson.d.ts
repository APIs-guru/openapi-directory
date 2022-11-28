import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTopicsPrivateMessagesSentUsernameJsonPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
    allowedUserCount?: number;
    archetype?: string;
    archived?: boolean;
    bookmarked?: boolean;
    bumped?: boolean;
    bumpedAt?: string;
    categoryId?: string;
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
    participants?: any[];
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonTopicListTopicsPosters[];
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
export declare class GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    topics?: GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonTopicListTopics[];
}
export declare class GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTopicsPrivateMessagesSentUsernameJson200ApplicationJson extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonTopicList;
    users?: GetTopicsPrivateMessagesSentUsernameJson200ApplicationJsonUsers[];
}
export declare class GetTopicsPrivateMessagesSentUsernameJsonRequest extends SpeakeasyBase {
    pathParams: GetTopicsPrivateMessagesSentUsernameJsonPathParams;
}
export declare class GetTopicsPrivateMessagesSentUsernameJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTopicsPrivateMessagesSentUsernameJson200ApplicationJsonObject?: GetTopicsPrivateMessagesSentUsernameJson200ApplicationJson;
    statusCode: number;
}
