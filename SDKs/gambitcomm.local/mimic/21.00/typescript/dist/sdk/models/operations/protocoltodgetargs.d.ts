import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTodGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTodGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolTodGetArgsPathParams;
}
export declare class ProtocolTodGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTodGetArgs200ApplicationJsonObject?: Map<string, any>;
}
