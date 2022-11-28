import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceDeleteWorkspaceImage = "WorkspacesService.DeleteWorkspaceImage"
}
export declare class DeleteWorkspaceImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkspaceImageXAmzTargetEnum;
}
export declare class DeleteWorkspaceImageRequest extends SpeakeasyBase {
    headers: DeleteWorkspaceImageHeaders;
    request: shared.DeleteWorkspaceImageRequest;
}
export declare class DeleteWorkspaceImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteWorkspaceImageResult?: Map<string, any>;
    invalidResourceStateException?: any;
    resourceAssociatedException?: any;
    statusCode: number;
}
