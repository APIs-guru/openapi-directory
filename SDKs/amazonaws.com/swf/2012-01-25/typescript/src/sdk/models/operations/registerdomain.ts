import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterDomainXAmzTargetEnum {
    SimpleWorkflowServiceRegisterDomain = "SimpleWorkflowService.RegisterDomain"
}


export class RegisterDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterDomainXAmzTargetEnum;
}


export class RegisterDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterDomainInput;
}


export class RegisterDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainAlreadyExistsFault?: any;

  @Metadata()
  limitExceededFault?: any;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsFault?: any;
}
