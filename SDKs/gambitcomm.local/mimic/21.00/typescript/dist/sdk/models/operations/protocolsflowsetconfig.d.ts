import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSflowSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolSflowSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowSetConfigPathParams;
}
export declare class ProtocolSflowSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowSetConfig200ApplicationJsonString?: string;
}
