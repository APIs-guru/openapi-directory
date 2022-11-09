import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceUpdateWorkspaceBundle = "WorkspacesService.UpdateWorkspaceBundle"
}


export class UpdateWorkspaceBundleHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateWorkspaceBundleXAmzTargetEnum;
}


export class UpdateWorkspaceBundleRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateWorkspaceBundleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateWorkspaceBundleRequest;
}


export class UpdateWorkspaceBundleResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateWorkspaceBundleResult?: Map<string, any>;
}
