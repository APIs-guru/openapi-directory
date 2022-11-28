import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostUsersJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PostUsersJsonRequestBody extends SpeakeasyBase {
    active?: boolean;
    approved?: boolean;
    email: string;
    name: string;
    password: string;
    userFields1?: string;
    username: string;
}
export declare class PostUsersJson200ApplicationJson extends SpeakeasyBase {
    active?: boolean;
    message?: string;
    success?: boolean;
    userId?: number;
}
export declare class PostUsersJsonRequest extends SpeakeasyBase {
    headers: PostUsersJsonHeaders;
    request?: PostUsersJsonRequestBody;
}
export declare class PostUsersJsonResponse extends SpeakeasyBase {
    contentType: string;
    postUsersJson200ApplicationJsonObject?: PostUsersJson200ApplicationJson;
    statusCode: number;
}
