import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyWorkspacePropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceProperties = "WorkspacesService.ModifyWorkspaceProperties"
}


export class ModifyWorkspacePropertiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyWorkspacePropertiesXAmzTargetEnum;
}


export class ModifyWorkspacePropertiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyWorkspacePropertiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyWorkspacePropertiesRequest;
}


export class ModifyWorkspacePropertiesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  modifyWorkspacePropertiesResult?: Map<string, any>;

  @Metadata()
  operationInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedWorkspaceConfigurationException?: any;
}
