import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmptcpIpaliasDisablePathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSnmptcpIpaliasDisableRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpIpaliasDisablePathParams;
}
export declare class ProtocolSnmptcpIpaliasDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpIpaliasDisable200ApplicationJsonString?: string;
}
