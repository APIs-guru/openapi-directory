import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeOrganizationalUnit = "AWSOrganizationsV20161128.DescribeOrganizationalUnit"
}
export declare class DescribeOrganizationalUnitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationalUnitXAmzTargetEnum;
}
export declare class DescribeOrganizationalUnitRequest extends SpeakeasyBase {
    headers: DescribeOrganizationalUnitHeaders;
    request: shared.DescribeOrganizationalUnitRequest;
}
export declare class DescribeOrganizationalUnitResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    describeOrganizationalUnitResponse?: shared.DescribeOrganizationalUnitResponse;
    invalidInputException?: any;
    organizationalUnitNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
