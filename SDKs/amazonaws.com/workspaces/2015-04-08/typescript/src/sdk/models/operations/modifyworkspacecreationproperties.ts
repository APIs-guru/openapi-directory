import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyWorkspaceCreationPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceCreationProperties = "WorkspacesService.ModifyWorkspaceCreationProperties"
}


export class ModifyWorkspaceCreationPropertiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyWorkspaceCreationPropertiesXAmzTargetEnum;
}


export class ModifyWorkspaceCreationPropertiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyWorkspaceCreationPropertiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyWorkspaceCreationPropertiesRequest;
}


export class ModifyWorkspaceCreationPropertiesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  modifyWorkspaceCreationPropertiesResult?: Map<string, any>;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
