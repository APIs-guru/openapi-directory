import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MigrateWorkspaceXAmzTargetEnum {
    WorkspacesServiceMigrateWorkspace = "WorkspacesService.MigrateWorkspace"
}
export declare class MigrateWorkspaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MigrateWorkspaceXAmzTargetEnum;
}
export declare class MigrateWorkspaceRequest extends SpeakeasyBase {
    headers: MigrateWorkspaceHeaders;
    request: shared.MigrateWorkspaceRequest;
}
export declare class MigrateWorkspaceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    migrateWorkspaceResult?: shared.MigrateWorkspaceResult;
    operationInProgressException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
