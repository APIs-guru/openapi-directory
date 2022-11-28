import { SpeakeasyBase } from "../../../internal/utils";
export declare class PingUserHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class PingUserRequest extends SpeakeasyBase {
    headers: PingUserHeaders;
}
export declare class PingUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    pingUser200TextPlainString?: string;
}
