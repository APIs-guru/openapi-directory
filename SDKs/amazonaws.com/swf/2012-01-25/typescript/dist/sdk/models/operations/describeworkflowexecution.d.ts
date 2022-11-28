import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceDescribeWorkflowExecution = "SimpleWorkflowService.DescribeWorkflowExecution"
}
export declare class DescribeWorkflowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkflowExecutionXAmzTargetEnum;
}
export declare class DescribeWorkflowExecutionRequest extends SpeakeasyBase {
    headers: DescribeWorkflowExecutionHeaders;
    request: shared.DescribeWorkflowExecutionInput;
}
export declare class DescribeWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowExecutionDetail?: shared.WorkflowExecutionDetail;
}
