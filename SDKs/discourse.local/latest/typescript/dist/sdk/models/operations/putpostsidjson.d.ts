import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPostsIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutPostsIdJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PutPostsIdJsonRequestBodyPost extends SpeakeasyBase {
    editReason?: string;
    raw: string;
}
export declare class PutPostsIdJsonRequestBody extends SpeakeasyBase {
    post?: PutPostsIdJsonRequestBodyPost;
}
export declare class PutPostsIdJson200ApplicationJsonPostActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    id?: number;
}
export declare class PutPostsIdJson200ApplicationJsonPost extends SpeakeasyBase {
    actionsSummary?: PutPostsIdJson200ApplicationJsonPostActionsSummary[];
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
    draftSequence?: number;
    editReason?: string;
    flairBgColor?: string;
    flairColor?: string;
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
export declare class PutPostsIdJson200ApplicationJson extends SpeakeasyBase {
    post?: PutPostsIdJson200ApplicationJsonPost;
}
export declare class PutPostsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutPostsIdJsonPathParams;
    headers: PutPostsIdJsonHeaders;
    request?: PutPostsIdJsonRequestBody;
}
export declare class PutPostsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    putPostsIdJson200ApplicationJsonObject?: PutPostsIdJson200ApplicationJson;
    statusCode: number;
}
