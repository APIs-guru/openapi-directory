import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPermissionSetsProvisionedToAccountQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPermissionSetsProvisionedToAccountXAmzTargetEnum {
    SwbExternalServiceListPermissionSetsProvisionedToAccount = "SWBExternalService.ListPermissionSetsProvisionedToAccount"
}
export declare class ListPermissionSetsProvisionedToAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPermissionSetsProvisionedToAccountXAmzTargetEnum;
}
export declare class ListPermissionSetsProvisionedToAccountRequest extends SpeakeasyBase {
    queryParams: ListPermissionSetsProvisionedToAccountQueryParams;
    headers: ListPermissionSetsProvisionedToAccountHeaders;
    request: shared.ListPermissionSetsProvisionedToAccountRequest;
}
export declare class ListPermissionSetsProvisionedToAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPermissionSetsProvisionedToAccountResponse?: shared.ListPermissionSetsProvisionedToAccountResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
