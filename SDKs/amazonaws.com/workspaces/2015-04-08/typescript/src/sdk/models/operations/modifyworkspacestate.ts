import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyWorkspaceStateXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceState = "WorkspacesService.ModifyWorkspaceState"
}


export class ModifyWorkspaceStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyWorkspaceStateXAmzTargetEnum;
}


export class ModifyWorkspaceStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyWorkspaceStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyWorkspaceStateRequest;
}


export class ModifyWorkspaceStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  modifyWorkspaceStateResult?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
