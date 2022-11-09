import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyWorkspaceAccessPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceAccessProperties = "WorkspacesService.ModifyWorkspaceAccessProperties"
}


export class ModifyWorkspaceAccessPropertiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyWorkspaceAccessPropertiesXAmzTargetEnum;
}


export class ModifyWorkspaceAccessPropertiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyWorkspaceAccessPropertiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyWorkspaceAccessPropertiesRequest;
}


export class ModifyWorkspaceAccessPropertiesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  modifyWorkspaceAccessPropertiesResult?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
