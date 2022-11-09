import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceDeleteWorkspaceImage = "WorkspacesService.DeleteWorkspaceImage"
}


export class DeleteWorkspaceImageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteWorkspaceImageXAmzTargetEnum;
}


export class DeleteWorkspaceImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteWorkspaceImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteWorkspaceImageRequest;
}


export class DeleteWorkspaceImageResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteWorkspaceImageResult?: Map<string, any>;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  resourceAssociatedException?: any;

  @Metadata()
  statusCode: number;
}
