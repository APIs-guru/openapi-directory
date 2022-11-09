import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterWorkspaceDirectoryXAmzTargetEnum {
    WorkspacesServiceRegisterWorkspaceDirectory = "WorkspacesService.RegisterWorkspaceDirectory"
}


export class RegisterWorkspaceDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterWorkspaceDirectoryXAmzTargetEnum;
}


export class RegisterWorkspaceDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterWorkspaceDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterWorkspaceDirectoryRequest;
}


export class RegisterWorkspaceDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  registerWorkspaceDirectoryResult?: Map<string, any>;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedNetworkConfigurationException?: any;

  @Metadata()
  workspacesDefaultRoleNotFoundException?: any;
}
