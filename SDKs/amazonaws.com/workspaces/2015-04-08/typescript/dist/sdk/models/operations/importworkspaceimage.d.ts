import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceImportWorkspaceImage = "WorkspacesService.ImportWorkspaceImage"
}
export declare class ImportWorkspaceImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportWorkspaceImageXAmzTargetEnum;
}
export declare class ImportWorkspaceImageRequest extends SpeakeasyBase {
    headers: ImportWorkspaceImageHeaders;
    request: shared.ImportWorkspaceImageRequest;
}
export declare class ImportWorkspaceImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    importWorkspaceImageResult?: shared.ImportWorkspaceImageResult;
    invalidParameterValuesException?: any;
    operationNotSupportedException?: any;
    resourceAlreadyExistsException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
