import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolIpmiGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolIpmiGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiGetArgsPathParams;
}
export declare class ProtocolIpmiGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolIpmiGetArgs200ApplicationJsonObject?: Map<string, any>;
}
