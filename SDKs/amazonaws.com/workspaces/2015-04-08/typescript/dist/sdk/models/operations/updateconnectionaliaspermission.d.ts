import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateConnectionAliasPermissionXAmzTargetEnum {
    WorkspacesServiceUpdateConnectionAliasPermission = "WorkspacesService.UpdateConnectionAliasPermission"
}
export declare class UpdateConnectionAliasPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConnectionAliasPermissionXAmzTargetEnum;
}
export declare class UpdateConnectionAliasPermissionRequest extends SpeakeasyBase {
    headers: UpdateConnectionAliasPermissionHeaders;
    request: shared.UpdateConnectionAliasPermissionRequest;
}
export declare class UpdateConnectionAliasPermissionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceAssociatedException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateConnectionAliasPermissionResult?: Map<string, any>;
}
