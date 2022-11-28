import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpeechSynthesisTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetSpeechSynthesisTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSpeechSynthesisTaskRequest extends SpeakeasyBase {
    pathParams: GetSpeechSynthesisTaskPathParams;
    headers: GetSpeechSynthesisTaskHeaders;
}
export declare class GetSpeechSynthesisTaskResponse extends SpeakeasyBase {
    contentType: string;
    getSpeechSynthesisTaskOutput?: shared.GetSpeechSynthesisTaskOutput;
    invalidTaskIdException?: any;
    serviceFailureException?: any;
    statusCode: number;
    synthesisTaskNotFoundException?: any;
}
