import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolNetflowSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowSetConfigPathParams;
}
export declare class ProtocolNetflowSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowSetConfig200ApplicationJsonString?: string;
}
