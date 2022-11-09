import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmptcpIpaliasEnablePathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSnmptcpIpaliasEnableRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpIpaliasEnablePathParams;
}
export declare class ProtocolSnmptcpIpaliasEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpIpaliasEnable200ApplicationJsonString?: string;
}
