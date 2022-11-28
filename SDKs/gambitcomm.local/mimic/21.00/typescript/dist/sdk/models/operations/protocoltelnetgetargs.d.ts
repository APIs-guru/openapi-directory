import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetGetArgsPathParams;
}
export declare class ProtocolTelnetGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetGetArgs200ApplicationJsonObject?: Map<string, any>;
}
