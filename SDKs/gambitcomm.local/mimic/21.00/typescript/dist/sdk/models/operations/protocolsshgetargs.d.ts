import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSshGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolSshGetArgsPathParams;
}
export declare class ProtocolSshGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshGetArgs200ApplicationJsonObject?: Map<string, any>;
}
