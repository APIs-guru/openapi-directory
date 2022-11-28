import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExecutionXAmzTargetEnum {
    TransferServiceDescribeExecution = "TransferService.DescribeExecution"
}
export declare class DescribeExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExecutionXAmzTargetEnum;
}
export declare class DescribeExecutionRequest extends SpeakeasyBase {
    headers: DescribeExecutionHeaders;
    request: shared.DescribeExecutionRequest;
}
export declare class DescribeExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describeExecutionResponse?: shared.DescribeExecutionResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
