import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolTelnetSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetSetConfigPathParams;
}
export declare class ProtocolTelnetSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetSetConfig200ApplicationJsonString?: string;
}
