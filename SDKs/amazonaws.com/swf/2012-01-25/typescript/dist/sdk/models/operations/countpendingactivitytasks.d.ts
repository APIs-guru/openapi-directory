import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CountPendingActivityTasksXAmzTargetEnum {
    SimpleWorkflowServiceCountPendingActivityTasks = "SimpleWorkflowService.CountPendingActivityTasks"
}
export declare class CountPendingActivityTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountPendingActivityTasksXAmzTargetEnum;
}
export declare class CountPendingActivityTasksRequest extends SpeakeasyBase {
    headers: CountPendingActivityTasksHeaders;
    request: shared.CountPendingActivityTasksInput;
}
export declare class CountPendingActivityTasksResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    pendingTaskCount?: shared.PendingTaskCount;
    statusCode: number;
    unknownResourceFault?: any;
}
