import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostsIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPostsIdJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetPostsIdJson200ApplicationJsonActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    id?: number;
}
export declare class GetPostsIdJson200ApplicationJson extends SpeakeasyBase {
    actionsSummary?: GetPostsIdJson200ApplicationJsonActionsSummary[];
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
export declare class GetPostsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetPostsIdJsonPathParams;
    headers: GetPostsIdJsonHeaders;
}
export declare class GetPostsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    getPostsIdJson200ApplicationJsonObject?: GetPostsIdJson200ApplicationJson;
    statusCode: number;
}
