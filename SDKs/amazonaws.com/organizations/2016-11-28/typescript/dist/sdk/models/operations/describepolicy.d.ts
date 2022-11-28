import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128DescribePolicy = "AWSOrganizationsV20161128.DescribePolicy"
}
export declare class DescribePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePolicyXAmzTargetEnum;
}
export declare class DescribePolicyRequest extends SpeakeasyBase {
    headers: DescribePolicyHeaders;
    request: shared.DescribePolicyRequest;
}
export declare class DescribePolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    describePolicyResponse?: shared.DescribePolicyResponse;
    invalidInputException?: any;
    policyNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
