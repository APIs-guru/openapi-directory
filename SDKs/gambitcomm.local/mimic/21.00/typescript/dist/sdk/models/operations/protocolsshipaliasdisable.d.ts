import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSshIpaliasDisablePathParams extends SpeakeasyBase {
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSshIpaliasDisableRequest extends SpeakeasyBase {
    pathParams: ProtocolSshIpaliasDisablePathParams;
}
export declare class ProtocolSshIpaliasDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshIpaliasDisable200ApplicationJsonString?: string;
}
