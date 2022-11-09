import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSshIpaliasEnablePathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSshIpaliasEnableRequest extends SpeakeasyBase {
    pathParams: ProtocolSshIpaliasEnablePathParams;
}
export declare class ProtocolSshIpaliasEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshIpaliasEnable200ApplicationJsonString?: string;
}
