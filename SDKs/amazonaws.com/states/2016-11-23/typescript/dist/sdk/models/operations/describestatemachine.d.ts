import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStateMachineXAmzTargetEnum {
    AwsStepFunctionsDescribeStateMachine = "AWSStepFunctions.DescribeStateMachine"
}
export declare class DescribeStateMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStateMachineXAmzTargetEnum;
}
export declare class DescribeStateMachineRequest extends SpeakeasyBase {
    headers: DescribeStateMachineHeaders;
    request: shared.DescribeStateMachineInput;
}
export declare class DescribeStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    describeStateMachineOutput?: shared.DescribeStateMachineOutput;
    invalidArn?: any;
    stateMachineDoesNotExist?: any;
    statusCode: number;
}
