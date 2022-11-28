import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetIpaliasIsenabledPathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolTelnetIpaliasIsenabledRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetIpaliasIsenabledPathParams;
}
export declare class ProtocolTelnetIpaliasIsenabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetIpaliasIsenabled200ApplicationJsonString?: string;
}
