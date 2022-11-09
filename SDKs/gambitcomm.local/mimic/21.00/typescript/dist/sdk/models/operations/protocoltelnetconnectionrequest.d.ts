import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTelnetConnectionRequestPathParams extends SpeakeasyBase {
    agentNum: number;
    command: string;
    connectionId: number;
}
export declare class ProtocolTelnetConnectionRequestRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetConnectionRequestPathParams;
}
export declare class ProtocolTelnetConnectionRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetConnectionRequest200ApplicationJsonStrings?: string[];
}
