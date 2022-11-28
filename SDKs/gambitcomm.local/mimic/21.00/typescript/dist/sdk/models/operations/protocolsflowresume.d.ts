import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSflowResumePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowResumeRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowResumePathParams;
}
export declare class ProtocolSflowResumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowResume200ApplicationJsonString?: string;
}
