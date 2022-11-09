import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxyGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolProxyGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyGetArgsPathParams;
}
export declare class ProtocolProxyGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyGetArgs200ApplicationJsonObject?: Map<string, any>;
}
