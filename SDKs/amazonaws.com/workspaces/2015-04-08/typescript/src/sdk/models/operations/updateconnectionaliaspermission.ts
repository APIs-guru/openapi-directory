import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateConnectionAliasPermissionXAmzTargetEnum {
    WorkspacesServiceUpdateConnectionAliasPermission = "WorkspacesService.UpdateConnectionAliasPermission"
}


export class UpdateConnectionAliasPermissionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateConnectionAliasPermissionXAmzTargetEnum;
}


export class UpdateConnectionAliasPermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateConnectionAliasPermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateConnectionAliasPermissionRequest;
}


export class UpdateConnectionAliasPermissionResponse extends SpeakeasyBase {
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
  resourceAssociatedException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateConnectionAliasPermissionResult?: Map<string, any>;
}
