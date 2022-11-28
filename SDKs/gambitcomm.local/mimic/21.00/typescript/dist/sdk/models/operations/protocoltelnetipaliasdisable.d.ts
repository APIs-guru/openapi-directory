import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetIpaliasDisablePathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolTelnetIpaliasDisableRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetIpaliasDisablePathParams;
}
export declare class ProtocolTelnetIpaliasDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetIpaliasDisable200ApplicationJsonString?: string;
}
