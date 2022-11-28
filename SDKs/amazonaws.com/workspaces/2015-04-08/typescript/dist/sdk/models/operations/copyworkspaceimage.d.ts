import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CopyWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceCopyWorkspaceImage = "WorkspacesService.CopyWorkspaceImage"
}
export declare class CopyWorkspaceImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyWorkspaceImageXAmzTargetEnum;
}
export declare class CopyWorkspaceImageRequest extends SpeakeasyBase {
    headers: CopyWorkspaceImageHeaders;
    request: shared.CopyWorkspaceImageRequest;
}
export declare class CopyWorkspaceImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    copyWorkspaceImageResult?: shared.CopyWorkspaceImageResult;
    invalidParameterValuesException?: any;
    operationNotSupportedException?: any;
    resourceAlreadyExistsException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
