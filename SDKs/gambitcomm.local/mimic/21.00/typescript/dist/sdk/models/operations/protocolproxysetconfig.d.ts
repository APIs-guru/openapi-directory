import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxySetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolProxySetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolProxySetConfigPathParams;
}
export declare class ProtocolProxySetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxySetConfig200ApplicationJsonString?: string;
}
