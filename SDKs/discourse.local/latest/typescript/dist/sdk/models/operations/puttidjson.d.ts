import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutTIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTIdJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PutTIdJsonRequestBodyTopic extends SpeakeasyBase {
    categoryId?: number;
    title?: string;
}
export declare class PutTIdJsonRequestBody extends SpeakeasyBase {
    topic?: PutTIdJsonRequestBodyTopic;
}
export declare class PutTIdJson200ApplicationJsonBasicTopic extends SpeakeasyBase {
    fancyTitle?: string;
    id?: number;
    postsCount?: number;
    slug?: string;
    title?: string;
}
export declare class PutTIdJson200ApplicationJson extends SpeakeasyBase {
    basicTopic?: PutTIdJson200ApplicationJsonBasicTopic;
}
export declare class PutTIdJsonRequest extends SpeakeasyBase {
    pathParams: PutTIdJsonPathParams;
    headers: PutTIdJsonHeaders;
    request?: PutTIdJsonRequestBody;
}
export declare class PutTIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    putTIdJson200ApplicationJsonObject?: PutTIdJson200ApplicationJson;
    statusCode: number;
}
