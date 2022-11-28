import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowListRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowListPathParams;
}
export declare class ProtocolNetflowListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowList200ApplicationJsonObjects?: Map<string, any>[];
}
