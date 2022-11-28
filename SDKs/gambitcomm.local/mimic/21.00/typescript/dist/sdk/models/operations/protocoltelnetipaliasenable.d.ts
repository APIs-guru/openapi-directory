import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetIpaliasEnablePathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolTelnetIpaliasEnableRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetIpaliasEnablePathParams;
}
export declare class ProtocolTelnetIpaliasEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetIpaliasEnable200ApplicationJsonString?: string;
}
