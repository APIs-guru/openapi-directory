import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CopyWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceCopyWorkspaceImage = "WorkspacesService.CopyWorkspaceImage"
}


export class CopyWorkspaceImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: CopyWorkspaceImageXAmzTargetEnum;
}


export class CopyWorkspaceImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CopyWorkspaceImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CopyWorkspaceImageRequest;
}


export class CopyWorkspaceImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  copyWorkspaceImageResult?: shared.CopyWorkspaceImageResult;

  @SpeakeasyMetadata()
  invalidParameterValuesException?: any;

  @SpeakeasyMetadata()
  operationNotSupportedException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  resourceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
