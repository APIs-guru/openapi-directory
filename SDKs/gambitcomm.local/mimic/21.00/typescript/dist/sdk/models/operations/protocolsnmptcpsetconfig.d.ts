import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmptcpSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolSnmptcpSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpSetConfigPathParams;
}
export declare class ProtocolSnmptcpSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpSetConfig200ApplicationJsonString?: string;
}
