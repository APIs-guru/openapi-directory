import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTIdJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetTIdJson200ApplicationJsonActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    count?: number;
    hidden?: boolean;
    id?: number;
}
export declare class GetTIdJson200ApplicationJsonDetailsCreatedBy extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTIdJson200ApplicationJsonDetailsLastPoster extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTIdJson200ApplicationJsonDetailsParticipants extends SpeakeasyBase {
    avatarTemplate?: string;
    flairBgColor?: string;
    flairColor?: string;
    flairName?: string;
    flairUrl?: string;
    id?: number;
    name?: string;
    postCount?: number;
    primaryGroupName?: string;
    username?: string;
}
export declare class GetTIdJson200ApplicationJsonDetails extends SpeakeasyBase {
    canConvertTopic?: boolean;
    canCreatePost?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canFlagTopic?: boolean;
    canMovePosts?: boolean;
    canRemoveAllowedUsers?: boolean;
    canRemoveSelfId?: number;
    canReplyAsNewTopic?: boolean;
    canReviewTopic?: boolean;
    createdBy?: GetTIdJson200ApplicationJsonDetailsCreatedBy;
    lastPoster?: GetTIdJson200ApplicationJsonDetailsLastPoster;
    notificationLevel?: number;
    participants?: GetTIdJson200ApplicationJsonDetailsParticipants[];
}
export declare class GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    id?: number;
}
export declare class GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts extends SpeakeasyBase {
    clicks?: number;
    internal?: boolean;
    reflection?: boolean;
    url?: string;
}
export declare class GetTIdJson200ApplicationJsonPostStreamPosts extends SpeakeasyBase {
    actionsSummary?: GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary[];
    admin?: boolean;
    avatarTemplate?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    canRecover?: boolean;
    canViewEditHistory?: boolean;
    canWiki?: boolean;
    cooked?: string;
    createdAt?: string;
    deletedAt?: string;
    displayUsername?: string;
    editReason?: string;
    flairBgColor?: string;
    flairColor?: string;
    flairName?: string;
    flairUrl?: string;
    hidden?: boolean;
    id?: number;
    incomingLinkCount?: number;
    linkCounts?: GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts[];
    moderator?: boolean;
    name?: string;
    postNumber?: number;
    postType?: number;
    primaryGroupName?: string;
    quoteCount?: number;
    read?: boolean;
    readersCount?: number;
    reads?: number;
    replyCount?: number;
    replyToPostNumber?: string;
    reviewableId?: number;
    reviewableScoreCount?: number;
    reviewableScorePendingCount?: number;
    score?: number;
    staff?: boolean;
    topicId?: number;
    topicSlug?: string;
    trustLevel?: number;
    updatedAt?: string;
    userDeleted?: boolean;
    userId?: number;
    userTitle?: string;
    username?: string;
    version?: number;
    wiki?: boolean;
    yours?: boolean;
}
export declare class GetTIdJson200ApplicationJsonPostStream extends SpeakeasyBase {
    posts?: GetTIdJson200ApplicationJsonPostStreamPosts[];
    stream?: any[];
}
export declare class GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTIdJson200ApplicationJsonSuggestedTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    user?: GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser;
}
export declare class GetTIdJson200ApplicationJsonSuggestedTopics extends SpeakeasyBase {
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
    highestPostNumber?: number;
    id?: number;
    imageUrl?: string;
    lastPostedAt?: string;
    lastReadPostNumber?: number;
    likeCount?: number;
    liked?: boolean;
    notificationLevel?: number;
    pinned?: boolean;
    posters?: GetTIdJson200ApplicationJsonSuggestedTopicsPosters[];
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
export declare class GetTIdJson200ApplicationJson extends SpeakeasyBase {
    actionsSummary?: GetTIdJson200ApplicationJsonActionsSummary[];
    archetype?: string;
    archived?: boolean;
    bookmarked?: boolean;
    categoryId?: number;
    chunkSize?: number;
    closed?: boolean;
    createdAt?: string;
    currentPostNumber?: number;
    deletedAt?: string;
    deletedBy?: string;
    details?: GetTIdJson200ApplicationJsonDetails;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    fancyTitle?: string;
    featuredLink?: string;
    hasDeleted?: boolean;
    hasSummary?: boolean;
    highestPostNumber?: number;
    id?: number;
    imageUrl?: string;
    lastPostedAt?: string;
    likeCount?: number;
    messageBusLastId?: number;
    participantCount?: number;
    pinned?: boolean;
    pinnedAt?: string;
    pinnedGlobally?: boolean;
    pinnedUntil?: string;
    postStream?: GetTIdJson200ApplicationJsonPostStream;
    postsCount?: number;
    replyCount?: number;
    showReadIndicator?: boolean;
    slug?: string;
    suggestedTopics?: GetTIdJson200ApplicationJsonSuggestedTopics[];
    thumbnails?: string;
    timelineLookup?: any[];
    title?: string;
    topicTimer?: string;
    unpinned?: string;
    userId?: number;
    views?: number;
    visible?: boolean;
    wordCount?: number;
}
export declare class GetTIdJsonRequest extends SpeakeasyBase {
    pathParams: GetTIdJsonPathParams;
    headers: GetTIdJsonHeaders;
}
export declare class GetTIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTIdJson200ApplicationJsonObject?: GetTIdJson200ApplicationJson;
    statusCode: number;
}
