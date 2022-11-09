import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTelnetServerGetUserdbPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetServerGetUserdbRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetServerGetUserdbPathParams;
}
export declare class ProtocolTelnetServerGetUserdbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetServerGetUserdb200ApplicationJsonStrings?: string[];
}
