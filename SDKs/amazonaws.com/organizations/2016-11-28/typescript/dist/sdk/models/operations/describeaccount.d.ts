import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccountXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeAccount = "AWSOrganizationsV20161128.DescribeAccount"
}
export declare class DescribeAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountXAmzTargetEnum;
}
export declare class DescribeAccountRequest extends SpeakeasyBase {
    headers: DescribeAccountHeaders;
    request: shared.DescribeAccountRequest;
}
export declare class DescribeAccountResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountNotFoundException?: any;
    contentType: string;
    describeAccountResponse?: shared.DescribeAccountResponse;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
