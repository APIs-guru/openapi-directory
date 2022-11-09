import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolDhcpSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolDhcpSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpSetConfigPathParams;
}
export declare class ProtocolDhcpSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolDhcpSetConfig200ApplicationJsonString?: string;
}
