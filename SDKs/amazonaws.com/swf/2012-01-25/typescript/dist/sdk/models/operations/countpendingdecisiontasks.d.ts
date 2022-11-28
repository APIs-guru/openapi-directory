import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CountPendingDecisionTasksXAmzTargetEnum {
    SimpleWorkflowServiceCountPendingDecisionTasks = "SimpleWorkflowService.CountPendingDecisionTasks"
}
export declare class CountPendingDecisionTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountPendingDecisionTasksXAmzTargetEnum;
}
export declare class CountPendingDecisionTasksRequest extends SpeakeasyBase {
    headers: CountPendingDecisionTasksHeaders;
    request: shared.CountPendingDecisionTasksInput;
}
export declare class CountPendingDecisionTasksResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    pendingTaskCount?: shared.PendingTaskCount;
    statusCode: number;
    unknownResourceFault?: any;
}
