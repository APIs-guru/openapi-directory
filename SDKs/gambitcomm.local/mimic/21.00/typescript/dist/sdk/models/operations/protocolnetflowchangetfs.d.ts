import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowChangeTfsPathParams extends SpeakeasyBase {
    agentNum: number;
    interval: number;
}
export declare class ProtocolNetflowChangeTfsRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowChangeTfsPathParams;
}
export declare class ProtocolNetflowChangeTfsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowChangeTfs200ApplicationJsonString?: string;
}
