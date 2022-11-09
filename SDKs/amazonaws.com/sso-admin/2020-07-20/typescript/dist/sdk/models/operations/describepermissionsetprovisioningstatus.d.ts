import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribePermissionSetProvisioningStatusXAmzTargetEnum {
    SwbExternalServiceDescribePermissionSetProvisioningStatus = "SWBExternalService.DescribePermissionSetProvisioningStatus"
}
export declare class DescribePermissionSetProvisioningStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePermissionSetProvisioningStatusXAmzTargetEnum;
}
export declare class DescribePermissionSetProvisioningStatusRequest extends SpeakeasyBase {
    headers: DescribePermissionSetProvisioningStatusHeaders;
    request: shared.DescribePermissionSetProvisioningStatusRequest;
}
export declare class DescribePermissionSetProvisioningStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describePermissionSetProvisioningStatusResponse?: shared.DescribePermissionSetProvisioningStatusResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
