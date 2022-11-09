import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteUserXAmzTargetEnum {
    WorkMailServiceDeleteUser = "WorkMailService.DeleteUser"
}


export class DeleteUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteUserXAmzTargetEnum;
}


export class DeleteUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteUserRequest;
}


export class DeleteUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteUserResponse?: Map<string, any>;

  @Metadata()
  directoryServiceAuthenticationFailedException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
