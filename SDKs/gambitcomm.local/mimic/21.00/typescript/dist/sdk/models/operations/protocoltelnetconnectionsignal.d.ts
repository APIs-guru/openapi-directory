import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetConnectionSignalPathParams extends SpeakeasyBase {
    agentNum: number;
    connectionId: number;
    signalName: string;
}
export declare class ProtocolTelnetConnectionSignalRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetConnectionSignalPathParams;
}
export declare class ProtocolTelnetConnectionSignalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetConnectionSignal200ApplicationJsonStrings?: string[];
}
