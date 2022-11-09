import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyAccountXAmzTargetEnum {
    WorkspacesServiceModifyAccount = "WorkspacesService.ModifyAccount"
}


export class ModifyAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyAccountXAmzTargetEnum;
}


export class ModifyAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyAccountRequest;
}


export class ModifyAccountResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  invalidResourceStateException?: any;

  @Metadata()
  modifyAccountResult?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
