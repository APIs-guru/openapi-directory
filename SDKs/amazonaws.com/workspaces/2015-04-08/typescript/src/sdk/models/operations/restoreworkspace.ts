import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RestoreWorkspaceXAmzTargetEnum {
    WorkspacesServiceRestoreWorkspace = "WorkspacesService.RestoreWorkspace"
}


export class RestoreWorkspaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RestoreWorkspaceXAmzTargetEnum;
}


export class RestoreWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestoreWorkspaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RestoreWorkspaceRequest;
}


export class RestoreWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  restoreWorkspaceResult?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
