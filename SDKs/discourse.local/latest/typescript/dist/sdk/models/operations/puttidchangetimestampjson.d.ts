import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutTIdChangeTimestampJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTIdChangeTimestampJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PutTIdChangeTimestampJsonRequestBody extends SpeakeasyBase {
    timestamp: string;
}
export declare class PutTIdChangeTimestampJson200ApplicationJson extends SpeakeasyBase {
    success?: string;
}
export declare class PutTIdChangeTimestampJsonRequest extends SpeakeasyBase {
    pathParams: PutTIdChangeTimestampJsonPathParams;
    headers: PutTIdChangeTimestampJsonHeaders;
    request?: PutTIdChangeTimestampJsonRequestBody;
}
export declare class PutTIdChangeTimestampJsonResponse extends SpeakeasyBase {
    contentType: string;
    putTIdChangeTimestampJson200ApplicationJsonObject?: PutTIdChangeTimestampJson200ApplicationJson;
    statusCode: number;
}
