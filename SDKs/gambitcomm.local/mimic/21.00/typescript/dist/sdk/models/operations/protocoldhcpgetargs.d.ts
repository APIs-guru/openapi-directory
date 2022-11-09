import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolDhcpGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolDhcpGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpGetArgsPathParams;
}
export declare class ProtocolDhcpGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolDhcpGetArgs200ApplicationJsonObject?: Map<string, any>;
}
