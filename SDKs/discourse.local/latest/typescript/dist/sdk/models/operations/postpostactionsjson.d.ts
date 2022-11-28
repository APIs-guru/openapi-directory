import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPostActionsJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PostPostActionsJsonRequestBody extends SpeakeasyBase {
    flagTopic?: boolean;
    id: number;
    postActionTypeId: number;
}
export declare class PostPostActionsJson200ApplicationJsonActionsSummary extends SpeakeasyBase {
    acted?: boolean;
    canUndo?: boolean;
    count?: number;
    id?: number;
}
export declare class PostPostActionsJson200ApplicationJson extends SpeakeasyBase {
    actionsSummary?: PostPostActionsJson200ApplicationJsonActionsSummary[];
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
    notice?: Map<string, any>;
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
export declare class PostPostActionsJsonRequest extends SpeakeasyBase {
    headers: PostPostActionsJsonHeaders;
    request?: PostPostActionsJsonRequestBody;
}
export declare class PostPostActionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    postPostActionsJson200ApplicationJsonObject?: PostPostActionsJson200ApplicationJson;
    statusCode: number;
}
