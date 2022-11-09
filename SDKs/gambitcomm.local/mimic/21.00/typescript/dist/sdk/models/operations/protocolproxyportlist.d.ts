import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxyPortListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolProxyPortListRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyPortListPathParams;
}
export declare class ProtocolProxyPortListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyPortList200ApplicationJsonInt32Integers?: number[];
}
