import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeOrganizationXAmzTargetEnum {
    WorkMailServiceDescribeOrganization = "WorkMailService.DescribeOrganization"
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
    request: shared.DescribeOrganizationRequest;
}
export declare class DescribeOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    describeOrganizationResponse?: shared.DescribeOrganizationResponse;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    statusCode: number;
}
