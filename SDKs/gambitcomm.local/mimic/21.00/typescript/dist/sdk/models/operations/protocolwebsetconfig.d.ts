import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolWebSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolWebSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolWebSetConfigPathParams;
}
export declare class ProtocolWebSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebSetConfig200ApplicationJsonString?: string;
}
