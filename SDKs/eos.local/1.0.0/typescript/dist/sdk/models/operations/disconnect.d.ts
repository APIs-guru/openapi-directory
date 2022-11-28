import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisconnectRequestBody extends SpeakeasyBase {
    endpoint: string;
}
export declare class DisconnectRequest extends SpeakeasyBase {
    request?: DisconnectRequestBody;
}
export declare class DisconnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    disconnect200ApplicationJsonString?: string;
}
