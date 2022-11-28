import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceDeleteWorkspaceImage = "WorkspacesService.DeleteWorkspaceImage"
}


export class DeleteWorkspaceImageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteWorkspaceImageXAmzTargetEnum;
}


export class DeleteWorkspaceImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteWorkspaceImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteWorkspaceImageRequest;
}


export class DeleteWorkspaceImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteWorkspaceImageResult?: Map<string, any>;

  @SpeakeasyMetadata()
  invalidResourceStateException?: any;

  @SpeakeasyMetadata()
  resourceAssociatedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
