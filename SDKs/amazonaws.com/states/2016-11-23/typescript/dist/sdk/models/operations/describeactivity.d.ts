import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeActivityXAmzTargetEnum {
    AwsStepFunctionsDescribeActivity = "AWSStepFunctions.DescribeActivity"
}
export declare class DescribeActivityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActivityXAmzTargetEnum;
}
export declare class DescribeActivityRequest extends SpeakeasyBase {
    headers: DescribeActivityHeaders;
    request: shared.DescribeActivityInput;
}
export declare class DescribeActivityResponse extends SpeakeasyBase {
    activityDoesNotExist?: any;
    contentType: string;
    describeActivityOutput?: shared.DescribeActivityOutput;
    invalidArn?: any;
    statusCode: number;
}
