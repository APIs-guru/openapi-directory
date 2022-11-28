import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClosedWorkflowExecutionsQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum ListClosedWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceListClosedWorkflowExecutions = "SimpleWorkflowService.ListClosedWorkflowExecutions"
}
export declare class ListClosedWorkflowExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListClosedWorkflowExecutionsXAmzTargetEnum;
}
export declare class ListClosedWorkflowExecutionsRequest extends SpeakeasyBase {
    queryParams: ListClosedWorkflowExecutionsQueryParams;
    headers: ListClosedWorkflowExecutionsHeaders;
    request: shared.ListClosedWorkflowExecutionsInput;
}
export declare class ListClosedWorkflowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowExecutionInfos?: shared.WorkflowExecutionInfos;
}
