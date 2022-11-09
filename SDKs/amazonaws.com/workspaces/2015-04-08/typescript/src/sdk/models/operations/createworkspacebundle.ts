import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceCreateWorkspaceBundle = "WorkspacesService.CreateWorkspaceBundle"
}


export class CreateWorkspaceBundleHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateWorkspaceBundleXAmzTargetEnum;
}


export class CreateWorkspaceBundleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWorkspaceBundleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateWorkspaceBundleRequest;
}


export class CreateWorkspaceBundleResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createWorkspaceBundleResult?: shared.CreateWorkspaceBundleResult;

  @Metadata()
  invalidParameterValuesException?: any;

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
