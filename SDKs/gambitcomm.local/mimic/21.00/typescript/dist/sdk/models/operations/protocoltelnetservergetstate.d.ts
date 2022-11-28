import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetServerGetStatePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetServerGetStateRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetServerGetStatePathParams;
}
export declare class ProtocolTelnetServerGetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetServerGetState200ApplicationJsonInt32Integers?: number[];
}
