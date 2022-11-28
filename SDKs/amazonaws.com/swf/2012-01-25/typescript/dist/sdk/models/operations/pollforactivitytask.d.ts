import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PollForActivityTaskXAmzTargetEnum {
    SimpleWorkflowServicePollForActivityTask = "SimpleWorkflowService.PollForActivityTask"
}
export declare class PollForActivityTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForActivityTaskXAmzTargetEnum;
}
export declare class PollForActivityTaskRequest extends SpeakeasyBase {
    headers: PollForActivityTaskHeaders;
    request: shared.PollForActivityTaskInput;
}
export declare class PollForActivityTaskResponse extends SpeakeasyBase {
    activityTask?: shared.ActivityTask;
    contentType: string;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
