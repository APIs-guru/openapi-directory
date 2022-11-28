import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ModifyWorkspaceAccessPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceAccessProperties = "WorkspacesService.ModifyWorkspaceAccessProperties"
}


export class ModifyWorkspaceAccessPropertiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyWorkspaceAccessPropertiesXAmzTargetEnum;
}


export class ModifyWorkspaceAccessPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyWorkspaceAccessPropertiesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ModifyWorkspaceAccessPropertiesRequest;
}


export class ModifyWorkspaceAccessPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modifyWorkspaceAccessPropertiesResult?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
