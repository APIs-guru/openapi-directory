import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListManagedPoliciesInPermissionSetQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListManagedPoliciesInPermissionSetXAmzTargetEnum {
    SwbExternalServiceListManagedPoliciesInPermissionSet = "SWBExternalService.ListManagedPoliciesInPermissionSet"
}
export declare class ListManagedPoliciesInPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListManagedPoliciesInPermissionSetXAmzTargetEnum;
}
export declare class ListManagedPoliciesInPermissionSetRequest extends SpeakeasyBase {
    queryParams: ListManagedPoliciesInPermissionSetQueryParams;
    headers: ListManagedPoliciesInPermissionSetHeaders;
    request: shared.ListManagedPoliciesInPermissionSetRequest;
}
export declare class ListManagedPoliciesInPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listManagedPoliciesInPermissionSetResponse?: shared.ListManagedPoliciesInPermissionSetResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
