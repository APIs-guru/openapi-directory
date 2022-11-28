import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetServerGetRulesdbPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetServerGetRulesdbRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetServerGetRulesdbPathParams;
}
export declare class ProtocolTelnetServerGetRulesdbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetServerGetRulesdb200ApplicationJsonStrings?: string[];
}
