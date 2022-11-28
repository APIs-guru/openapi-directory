import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOpenWorkflowExecutionsQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum ListOpenWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceListOpenWorkflowExecutions = "SimpleWorkflowService.ListOpenWorkflowExecutions"
}
export declare class ListOpenWorkflowExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOpenWorkflowExecutionsXAmzTargetEnum;
}
export declare class ListOpenWorkflowExecutionsRequest extends SpeakeasyBase {
    queryParams: ListOpenWorkflowExecutionsQueryParams;
    headers: ListOpenWorkflowExecutionsHeaders;
    request: shared.ListOpenWorkflowExecutionsInput;
}
export declare class ListOpenWorkflowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowExecutionInfos?: shared.WorkflowExecutionInfos;
}
