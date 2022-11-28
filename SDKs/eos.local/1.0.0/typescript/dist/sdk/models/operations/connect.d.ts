import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectRequestBody extends SpeakeasyBase {
    endpoint: string;
}
export declare class ConnectRequest extends SpeakeasyBase {
    request?: ConnectRequestBody;
}
export declare class ConnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    connect200ApplicationJsonString?: string;
}
