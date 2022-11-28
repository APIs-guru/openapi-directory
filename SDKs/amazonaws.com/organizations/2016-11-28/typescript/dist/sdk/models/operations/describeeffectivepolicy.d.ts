import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEffectivePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeEffectivePolicy = "AWSOrganizationsV20161128.DescribeEffectivePolicy"
}
export declare class DescribeEffectivePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEffectivePolicyXAmzTargetEnum;
}
export declare class DescribeEffectivePolicyRequest extends SpeakeasyBase {
    headers: DescribeEffectivePolicyHeaders;
    request: shared.DescribeEffectivePolicyRequest;
}
export declare class DescribeEffectivePolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    constraintViolationException?: any;
    contentType: string;
    describeEffectivePolicyResponse?: shared.DescribeEffectivePolicyResponse;
    effectivePolicyNotFoundException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    targetNotFoundException?: any;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
