import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealtimeHeaders extends SpeakeasyBase {
    secWebsocketProtocol: string;
}
export declare class GetRealtimeRequest extends SpeakeasyBase {
    headers: GetRealtimeHeaders;
}
export declare class GetRealtimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
