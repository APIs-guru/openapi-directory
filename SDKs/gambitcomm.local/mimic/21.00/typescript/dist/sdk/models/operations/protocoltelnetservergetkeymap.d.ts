import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetServerGetKeymapPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetServerGetKeymapRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetServerGetKeymapPathParams;
}
export declare class ProtocolTelnetServerGetKeymapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetServerGetKeymap200ApplicationJsonStrings?: string[];
}
