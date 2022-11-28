import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePermissionSetXAmzTargetEnum {
    SwbExternalServiceDescribePermissionSet = "SWBExternalService.DescribePermissionSet"
}
export declare class DescribePermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePermissionSetXAmzTargetEnum;
}
export declare class DescribePermissionSetRequest extends SpeakeasyBase {
    headers: DescribePermissionSetHeaders;
    request: shared.DescribePermissionSetRequest;
}
export declare class DescribePermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describePermissionSetResponse?: shared.DescribePermissionSetResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
