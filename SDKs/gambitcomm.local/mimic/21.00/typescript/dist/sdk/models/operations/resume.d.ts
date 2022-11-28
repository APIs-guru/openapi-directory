import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResumePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ResumeRequest extends SpeakeasyBase {
    pathParams: ResumePathParams;
}
export declare class ResumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resume200ApplicationJsonString?: string;
}
