import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceDescribeWorkflowType = "SimpleWorkflowService.DescribeWorkflowType"
}
export declare class DescribeWorkflowTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkflowTypeXAmzTargetEnum;
}
export declare class DescribeWorkflowTypeRequest extends SpeakeasyBase {
    headers: DescribeWorkflowTypeHeaders;
    request: shared.DescribeWorkflowTypeInput;
}
export declare class DescribeWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowTypeDetail?: shared.WorkflowTypeDetail;
}
