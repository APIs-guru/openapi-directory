import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTIdTimerJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostTIdTimerJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PostTIdTimerJsonRequestBody extends SpeakeasyBase {
    basedOnLastPost?: boolean;
    categoryId?: number;
    statusType?: string;
    time?: string;
}
export declare class PostTIdTimerJson200ApplicationJson extends SpeakeasyBase {
    basedOnLastPost?: boolean;
    categoryId?: string;
    closed?: boolean;
    duration?: string;
    executeAt?: string;
    success?: string;
}
export declare class PostTIdTimerJsonRequest extends SpeakeasyBase {
    pathParams: PostTIdTimerJsonPathParams;
    headers: PostTIdTimerJsonHeaders;
    request?: PostTIdTimerJsonRequestBody;
}
export declare class PostTIdTimerJsonResponse extends SpeakeasyBase {
    contentType: string;
    postTIdTimerJson200ApplicationJsonObject?: PostTIdTimerJson200ApplicationJson;
    statusCode: number;
}
