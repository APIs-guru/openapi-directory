import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolWebGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolWebGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolWebGetArgsPathParams;
}
export declare class ProtocolWebGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebGetArgs200ApplicationJsonObject?: Map<string, any>;
}
