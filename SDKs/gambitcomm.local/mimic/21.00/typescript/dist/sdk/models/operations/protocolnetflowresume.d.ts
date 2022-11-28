import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowResumePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowResumeRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowResumePathParams;
}
export declare class ProtocolNetflowResumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowResume200ApplicationJsonString?: string;
}
