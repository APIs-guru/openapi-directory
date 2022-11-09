import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolCoapGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolCoapGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolCoapGetArgsPathParams;
}
export declare class ProtocolCoapGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolCoapGetArgs200ApplicationJsonObject?: Map<string, any>;
}
