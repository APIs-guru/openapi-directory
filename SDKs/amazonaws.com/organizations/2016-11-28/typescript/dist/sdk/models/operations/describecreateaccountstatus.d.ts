import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCreateAccountStatusXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeCreateAccountStatus = "AWSOrganizationsV20161128.DescribeCreateAccountStatus"
}
export declare class DescribeCreateAccountStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCreateAccountStatusXAmzTargetEnum;
}
export declare class DescribeCreateAccountStatusRequest extends SpeakeasyBase {
    headers: DescribeCreateAccountStatusHeaders;
    request: shared.DescribeCreateAccountStatusRequest;
}
export declare class DescribeCreateAccountStatusResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    createAccountStatusNotFoundException?: any;
    describeCreateAccountStatusResponse?: shared.DescribeCreateAccountStatusResponse;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
