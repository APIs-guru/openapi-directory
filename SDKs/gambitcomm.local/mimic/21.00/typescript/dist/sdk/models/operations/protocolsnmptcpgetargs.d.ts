import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmptcpGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmptcpGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpGetArgsPathParams;
}
export declare class ProtocolSnmptcpGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpGetArgs200ApplicationJsonObject?: Map<string, any>;
}
