import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeOrganization = "AWSOrganizationsV20161128.DescribeOrganization"
}
export declare class DescribeOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationXAmzTargetEnum;
}
export declare class DescribeOrganizationRequest extends SpeakeasyBase {
    headers: DescribeOrganizationHeaders;
}
export declare class DescribeOrganizationResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    describeOrganizationResponse?: shared.DescribeOrganizationResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
