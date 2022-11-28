import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSshIpaliasIsenabledPathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSshIpaliasIsenabledRequest extends SpeakeasyBase {
    pathParams: ProtocolSshIpaliasIsenabledPathParams;
}
export declare class ProtocolSshIpaliasIsenabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshIpaliasIsenabled200ApplicationJsonString?: string;
}
