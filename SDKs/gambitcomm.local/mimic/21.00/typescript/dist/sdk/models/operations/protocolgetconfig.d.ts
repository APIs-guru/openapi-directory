import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    prot: string;
}
export declare class ProtocolGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolGetConfigPathParams;
}
export declare class ProtocolGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolGetConfig200ApplicationJsonObject?: Map<string, any>;
}
