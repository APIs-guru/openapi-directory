import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkflowXAmzTargetEnum {
    TransferServiceDescribeWorkflow = "TransferService.DescribeWorkflow"
}
export declare class DescribeWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkflowXAmzTargetEnum;
}
export declare class DescribeWorkflowRequest extends SpeakeasyBase {
    headers: DescribeWorkflowHeaders;
    request: shared.DescribeWorkflowRequest;
}
export declare class DescribeWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkflowResponse?: shared.DescribeWorkflowResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
