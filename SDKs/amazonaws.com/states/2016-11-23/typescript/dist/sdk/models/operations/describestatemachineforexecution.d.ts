import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStateMachineForExecutionXAmzTargetEnum {
    AwsStepFunctionsDescribeStateMachineForExecution = "AWSStepFunctions.DescribeStateMachineForExecution"
}
export declare class DescribeStateMachineForExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStateMachineForExecutionXAmzTargetEnum;
}
export declare class DescribeStateMachineForExecutionRequest extends SpeakeasyBase {
    headers: DescribeStateMachineForExecutionHeaders;
    request: shared.DescribeStateMachineForExecutionInput;
}
export declare class DescribeStateMachineForExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describeStateMachineForExecutionOutput?: shared.DescribeStateMachineForExecutionOutput;
    executionDoesNotExist?: any;
    invalidArn?: any;
    statusCode: number;
}
