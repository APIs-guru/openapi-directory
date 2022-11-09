import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSshSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolSshSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSshSetConfigPathParams;
}
export declare class ProtocolSshSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshSetConfig200ApplicationJsonString?: string;
}
