import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmptcpIpaliasIsenabledPathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSnmptcpIpaliasIsenabledRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpIpaliasIsenabledPathParams;
}
export declare class ProtocolSnmptcpIpaliasIsenabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpIpaliasIsenabled200ApplicationJsonString?: string;
}
