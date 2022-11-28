import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTopJsonPeriodEqualFlagPathParams extends SpeakeasyBase {
    flag: string;
}
export declare class GetTopJsonPeriodEqualFlagHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetTopJsonPeriodEqualFlag200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTopJsonPeriodEqualFlag200ApplicationJsonTopicListTopics extends SpeakeasyBase {
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
    posters?: GetTopJsonPeriodEqualFlag200ApplicationJsonTopicListTopicsPosters[];
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
export declare class GetTopJsonPeriodEqualFlag200ApplicationJsonTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    forPeriod?: string;
    perPage?: number;
    topics?: GetTopJsonPeriodEqualFlag200ApplicationJsonTopicListTopics[];
}
export declare class GetTopJsonPeriodEqualFlag200ApplicationJsonUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTopJsonPeriodEqualFlag200ApplicationJson extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetTopJsonPeriodEqualFlag200ApplicationJsonTopicList;
    users?: GetTopJsonPeriodEqualFlag200ApplicationJsonUsers[];
}
export declare class GetTopJsonPeriodEqualFlagRequest extends SpeakeasyBase {
    pathParams: GetTopJsonPeriodEqualFlagPathParams;
    headers: GetTopJsonPeriodEqualFlagHeaders;
}
export declare class GetTopJsonPeriodEqualFlagResponse extends SpeakeasyBase {
    contentType: string;
    getTopJsonPeriodEqualFlag200ApplicationJsonObject?: GetTopJsonPeriodEqualFlag200ApplicationJson;
    statusCode: number;
}
