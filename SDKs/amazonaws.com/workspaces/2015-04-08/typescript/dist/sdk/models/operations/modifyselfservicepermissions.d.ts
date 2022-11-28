import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifySelfservicePermissionsXAmzTargetEnum {
    WorkspacesServiceModifySelfservicePermissions = "WorkspacesService.ModifySelfservicePermissions"
}
export declare class ModifySelfservicePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifySelfservicePermissionsXAmzTargetEnum;
}
export declare class ModifySelfservicePermissionsRequest extends SpeakeasyBase {
    headers: ModifySelfservicePermissionsHeaders;
    request: shared.ModifySelfservicePermissionsRequest;
}
export declare class ModifySelfservicePermissionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    modifySelfservicePermissionsResult?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
