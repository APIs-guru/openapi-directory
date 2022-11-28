import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostChargePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum PostChargeRequestBodyActionEnum {
    Start = "START",
    Stop = "STOP"
}
export declare class PostChargeRequestBody extends SpeakeasyBase {
    action: PostChargeRequestBodyActionEnum;
}
export declare class PostCharge200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Map<string, any>;
}
export declare class PostChargeRequest extends SpeakeasyBase {
    pathParams: PostChargePathParams;
    request: PostChargeRequestBody;
}
export declare class PostChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postCharge200ApplicationJsonObject?: PostCharge200ApplicationJson;
}
