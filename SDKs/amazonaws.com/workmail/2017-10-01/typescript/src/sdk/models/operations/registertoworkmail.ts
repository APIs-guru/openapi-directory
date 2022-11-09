import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterToWorkMailXAmzTargetEnum {
    WorkMailServiceRegisterToWorkMail = "WorkMailService.RegisterToWorkMail"
}


export class RegisterToWorkMailHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterToWorkMailXAmzTargetEnum;
}


export class RegisterToWorkMailRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterToWorkMailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterToWorkMailRequest;
}


export class RegisterToWorkMailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryServiceAuthenticationFailedException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  emailAddressInUseException?: any;

  @Metadata()
  entityAlreadyRegisteredException?: any;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  mailDomainNotFoundException?: any;

  @Metadata()
  mailDomainStateException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  registerToWorkMailResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
