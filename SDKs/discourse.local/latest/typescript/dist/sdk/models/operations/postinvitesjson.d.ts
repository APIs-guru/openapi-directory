import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInvitesJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PostInvitesJsonRequestBody extends SpeakeasyBase {
    customMessage?: string;
    email?: string;
    expiresAt?: string;
    groupId?: number;
    groupNames?: string;
    maxRedemptionsAllowed?: number;
    skipEmail?: boolean;
    topicId?: number;
}
export declare class PostInvitesJson200ApplicationJson extends SpeakeasyBase {
    createdAt?: string;
    customMessage?: string;
    email?: string;
    emailed?: boolean;
    expired?: boolean;
    expiresAt?: string;
    groups?: any[];
    id?: number;
    link?: string;
    topics?: any[];
    updatedAt?: string;
}
export declare class PostInvitesJsonRequest extends SpeakeasyBase {
    headers: PostInvitesJsonHeaders;
    request?: PostInvitesJsonRequestBody;
}
export declare class PostInvitesJsonResponse extends SpeakeasyBase {
    contentType: string;
    postInvitesJson200ApplicationJsonObject?: PostInvitesJson200ApplicationJson;
    statusCode: number;
}
