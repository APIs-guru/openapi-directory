import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostsJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetPostsJson200ApplicationJsonLatestPostsActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    id?: number;
}
export declare class GetPostsJson200ApplicationJsonLatestPosts extends SpeakeasyBase {
    actionsSummary?: GetPostsJson200ApplicationJsonLatestPostsActionsSummary[];
    admin?: boolean;
    avatarTemplate?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    canRecover?: boolean;
    canViewEditHistory?: boolean;
    canWiki?: boolean;
    categoryId?: number;
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
    moderator?: boolean;
    name?: string;
    postNumber?: number;
    postType?: number;
    primaryGroupName?: string;
    quoteCount?: number;
    raw?: string;
    readersCount?: number;
    reads?: number;
    replyCount?: number;
    replyToPostNumber?: string;
    reviewableId?: string;
    reviewableScoreCount?: number;
    reviewableScorePendingCount?: number;
    score?: number;
    staff?: boolean;
    topicHtmlTitle?: string;
    topicId?: number;
    topicSlug?: string;
    topicTitle?: string;
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
export declare class GetPostsJson200ApplicationJson extends SpeakeasyBase {
    latestPosts?: GetPostsJson200ApplicationJsonLatestPosts[];
}
export declare class GetPostsJsonRequest extends SpeakeasyBase {
    headers: GetPostsJsonHeaders;
}
export declare class GetPostsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getPostsJson200ApplicationJsonObject?: GetPostsJson200ApplicationJson;
    statusCode: number;
}
