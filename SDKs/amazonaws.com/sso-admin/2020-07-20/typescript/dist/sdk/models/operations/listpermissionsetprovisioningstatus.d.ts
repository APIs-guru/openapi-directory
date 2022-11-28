import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPermissionSetProvisioningStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPermissionSetProvisioningStatusXAmzTargetEnum {
    SwbExternalServiceListPermissionSetProvisioningStatus = "SWBExternalService.ListPermissionSetProvisioningStatus"
}
export declare class ListPermissionSetProvisioningStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPermissionSetProvisioningStatusXAmzTargetEnum;
}
export declare class ListPermissionSetProvisioningStatusRequest extends SpeakeasyBase {
    queryParams: ListPermissionSetProvisioningStatusQueryParams;
    headers: ListPermissionSetProvisioningStatusHeaders;
    request: shared.ListPermissionSetProvisioningStatusRequest;
}
export declare class ListPermissionSetProvisioningStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPermissionSetProvisioningStatusResponse?: shared.ListPermissionSetProvisioningStatusResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
