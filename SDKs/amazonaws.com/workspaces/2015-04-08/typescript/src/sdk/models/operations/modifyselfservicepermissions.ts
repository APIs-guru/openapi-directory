import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifySelfservicePermissionsXAmzTargetEnum {
    WorkspacesServiceModifySelfservicePermissions = "WorkspacesService.ModifySelfservicePermissions"
}


export class ModifySelfservicePermissionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifySelfservicePermissionsXAmzTargetEnum;
}


export class ModifySelfservicePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifySelfservicePermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifySelfservicePermissionsRequest;
}


export class ModifySelfservicePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  modifySelfservicePermissionsResult?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
