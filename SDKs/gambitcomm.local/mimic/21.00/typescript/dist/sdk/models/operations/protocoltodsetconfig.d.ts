import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTodSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolTodSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolTodSetConfigPathParams;
}
export declare class ProtocolTodSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTodSetConfig200ApplicationJsonString?: string;
}
