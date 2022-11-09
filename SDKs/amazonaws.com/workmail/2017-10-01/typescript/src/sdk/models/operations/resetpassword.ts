import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResetPasswordXAmzTargetEnum {
    WorkMailServiceResetPassword = "WorkMailService.ResetPassword"
}


export class ResetPasswordHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResetPasswordXAmzTargetEnum;
}


export class ResetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResetPasswordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResetPasswordRequest;
}


export class ResetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryServiceAuthenticationFailedException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidPasswordException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  resetPasswordResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
