import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPostsIdLockedJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutPostsIdLockedJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PutPostsIdLockedJsonRequestBody extends SpeakeasyBase {
    locked: boolean;
}
export declare class PutPostsIdLockedJson200ApplicationJson extends SpeakeasyBase {
    locked?: boolean;
}
export declare class PutPostsIdLockedJsonRequest extends SpeakeasyBase {
    pathParams: PutPostsIdLockedJsonPathParams;
    headers: PutPostsIdLockedJsonHeaders;
    request?: PutPostsIdLockedJsonRequestBody;
}
export declare class PutPostsIdLockedJsonResponse extends SpeakeasyBase {
    contentType: string;
    putPostsIdLockedJson200ApplicationJsonObject?: PutPostsIdLockedJson200ApplicationJson;
    statusCode: number;
}
