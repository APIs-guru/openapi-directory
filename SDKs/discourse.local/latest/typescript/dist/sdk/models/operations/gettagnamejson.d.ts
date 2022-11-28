import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagNameJsonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetTagNameJson200ApplicationJsonTopicListTags extends SpeakeasyBase {
    id?: number;
    name?: string;
    staff?: boolean;
    topicCount?: number;
}
export declare class GetTagNameJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTagNameJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
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
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: GetTagNameJson200ApplicationJsonTopicListTopicsPosters[];
    postsCount?: number;
    replyCount?: number;
    slug?: string;
    tags?: any[];
    title?: string;
    unpinned?: string;
    unreadPosts?: number;
    unseen?: boolean;
    views?: number;
    visible?: boolean;
}
export declare class GetTagNameJson200ApplicationJsonTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    tags?: GetTagNameJson200ApplicationJsonTopicListTags[];
    topics?: GetTagNameJson200ApplicationJsonTopicListTopics[];
}
export declare class GetTagNameJson200ApplicationJsonUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class GetTagNameJson200ApplicationJson extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetTagNameJson200ApplicationJsonTopicList;
    users?: GetTagNameJson200ApplicationJsonUsers[];
}
export declare class GetTagNameJsonRequest extends SpeakeasyBase {
    pathParams: GetTagNameJsonPathParams;
}
export declare class GetTagNameJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTagNameJson200ApplicationJsonObject?: GetTagNameJson200ApplicationJson;
    statusCode: number;
}
