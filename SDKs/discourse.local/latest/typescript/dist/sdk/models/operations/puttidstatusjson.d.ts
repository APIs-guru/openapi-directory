import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutTIdStatusJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTIdStatusJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare enum PutTIdStatusJsonRequestBodyEnabledEnum {
    True = "true",
    False = "false"
}
export declare enum PutTIdStatusJsonRequestBodyStatusEnum {
    Closed = "closed",
    Pinned = "pinned",
    PinnedGlobally = "pinned_globally",
    Archived = "archived",
    Visible = "visible"
}
export declare class PutTIdStatusJsonRequestBody extends SpeakeasyBase {
    enabled: PutTIdStatusJsonRequestBodyEnabledEnum;
    status: PutTIdStatusJsonRequestBodyStatusEnum;
    until?: string;
}
export declare class PutTIdStatusJson200ApplicationJson extends SpeakeasyBase {
    success?: string;
    topicStatusUpdate?: string;
}
export declare class PutTIdStatusJsonRequest extends SpeakeasyBase {
    pathParams: PutTIdStatusJsonPathParams;
    headers: PutTIdStatusJsonHeaders;
    request?: PutTIdStatusJsonRequestBody;
}
export declare class PutTIdStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    putTIdStatusJson200ApplicationJsonObject?: PutTIdStatusJson200ApplicationJson;
    statusCode: number;
}
