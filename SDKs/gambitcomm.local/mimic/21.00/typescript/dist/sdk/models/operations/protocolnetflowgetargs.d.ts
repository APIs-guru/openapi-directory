import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowGetArgsPathParams;
}
export declare class ProtocolNetflowGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowGetArgs200ApplicationJsonObject?: Map<string, any>;
}
