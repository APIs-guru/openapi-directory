import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolCoapSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolCoapSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolCoapSetConfigPathParams;
}
export declare class ProtocolCoapSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolCoapSetConfig200ApplicationJsonString?: string;
}
