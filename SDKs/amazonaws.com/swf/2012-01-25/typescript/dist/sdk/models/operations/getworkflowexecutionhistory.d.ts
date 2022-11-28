import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowExecutionHistoryQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum GetWorkflowExecutionHistoryXAmzTargetEnum {
    SimpleWorkflowServiceGetWorkflowExecutionHistory = "SimpleWorkflowService.GetWorkflowExecutionHistory"
}
export declare class GetWorkflowExecutionHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowExecutionHistoryXAmzTargetEnum;
}
export declare class GetWorkflowExecutionHistoryRequest extends SpeakeasyBase {
    queryParams: GetWorkflowExecutionHistoryQueryParams;
    headers: GetWorkflowExecutionHistoryHeaders;
    request: shared.GetWorkflowExecutionHistoryInput;
}
export declare class GetWorkflowExecutionHistoryResponse extends SpeakeasyBase {
    contentType: string;
    history?: shared.History;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
