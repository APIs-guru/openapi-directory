import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExecutionXAmzTargetEnum {
    AwsStepFunctionsDescribeExecution = "AWSStepFunctions.DescribeExecution"
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
    request: shared.DescribeExecutionInput;
}
export declare class DescribeExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describeExecutionOutput?: shared.DescribeExecutionOutput;
    executionDoesNotExist?: any;
    invalidArn?: any;
    statusCode: number;
}
