import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSflowGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowGetArgsPathParams;
}
export declare class ProtocolSflowGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowGetArgs200ApplicationJsonObject?: Map<string, any>;
}
