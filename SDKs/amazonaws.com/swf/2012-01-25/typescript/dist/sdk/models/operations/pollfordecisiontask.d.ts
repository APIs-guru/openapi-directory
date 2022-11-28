import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PollForDecisionTaskQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum PollForDecisionTaskXAmzTargetEnum {
    SimpleWorkflowServicePollForDecisionTask = "SimpleWorkflowService.PollForDecisionTask"
}
export declare class PollForDecisionTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForDecisionTaskXAmzTargetEnum;
}
export declare class PollForDecisionTaskRequest extends SpeakeasyBase {
    queryParams: PollForDecisionTaskQueryParams;
    headers: PollForDecisionTaskHeaders;
    request: shared.PollForDecisionTaskInput;
}
export declare class PollForDecisionTaskResponse extends SpeakeasyBase {
    contentType: string;
    decisionTask?: shared.DecisionTask;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
