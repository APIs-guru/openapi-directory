import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CopyWorkspaceImageXAmzTargetEnum {
    WorkspacesServiceCopyWorkspaceImage = "WorkspacesService.CopyWorkspaceImage"
}


export class CopyWorkspaceImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: CopyWorkspaceImageXAmzTargetEnum;
}


export class CopyWorkspaceImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: CopyWorkspaceImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CopyWorkspaceImageRequest;
}


export class CopyWorkspaceImageResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  copyWorkspaceImageResult?: shared.CopyWorkspaceImageResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
