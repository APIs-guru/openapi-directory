import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccountsForProvisionedPermissionSetQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountsForProvisionedPermissionSetXAmzTargetEnum {
    SwbExternalServiceListAccountsForProvisionedPermissionSet = "SWBExternalService.ListAccountsForProvisionedPermissionSet"
}
export declare class ListAccountsForProvisionedPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountsForProvisionedPermissionSetXAmzTargetEnum;
}
export declare class ListAccountsForProvisionedPermissionSetRequest extends SpeakeasyBase {
    queryParams: ListAccountsForProvisionedPermissionSetQueryParams;
    headers: ListAccountsForProvisionedPermissionSetHeaders;
    request: shared.ListAccountsForProvisionedPermissionSetRequest;
}
export declare class ListAccountsForProvisionedPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAccountsForProvisionedPermissionSetResponse?: shared.ListAccountsForProvisionedPermissionSetResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
