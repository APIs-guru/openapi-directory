import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTIdInviteJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostTIdInviteJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PostTIdInviteJsonRequestBody extends SpeakeasyBase {
    email?: string;
    user?: string;
}
export declare class PostTIdInviteJson200ApplicationJsonUser extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
export declare class PostTIdInviteJson200ApplicationJson extends SpeakeasyBase {
    user?: PostTIdInviteJson200ApplicationJsonUser;
}
export declare class PostTIdInviteJsonRequest extends SpeakeasyBase {
    pathParams: PostTIdInviteJsonPathParams;
    headers: PostTIdInviteJsonHeaders;
    request?: PostTIdInviteJsonRequestBody;
}
export declare class PostTIdInviteJsonResponse extends SpeakeasyBase {
    contentType: string;
    postTIdInviteJson200ApplicationJsonObject?: PostTIdInviteJson200ApplicationJson;
    statusCode: number;
}
