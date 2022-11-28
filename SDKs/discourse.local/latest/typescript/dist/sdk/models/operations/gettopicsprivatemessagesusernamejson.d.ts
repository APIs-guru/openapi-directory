import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTopicsPrivateMessagesUsernameJsonPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
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
    participants?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants[];
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters[];
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
export declare class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    topics?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics[];
}
export declare class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTopicsPrivateMessagesUsernameJson200ApplicationJson extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList;
    users?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers[];
}
export declare class GetTopicsPrivateMessagesUsernameJsonRequest extends SpeakeasyBase {
    pathParams: GetTopicsPrivateMessagesUsernameJsonPathParams;
}
export declare class GetTopicsPrivateMessagesUsernameJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTopicsPrivateMessagesUsernameJson200ApplicationJsonObject?: GetTopicsPrivateMessagesUsernameJson200ApplicationJson;
    statusCode: number;
}
