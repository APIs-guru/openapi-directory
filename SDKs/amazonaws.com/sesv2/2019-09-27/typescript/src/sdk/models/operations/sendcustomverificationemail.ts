import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendCustomVerificationEmailHeaders extends SpeakeasyBase {
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
}


export class SendCustomVerificationEmailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;
}


export class SendCustomVerificationEmailRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendCustomVerificationEmailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendCustomVerificationEmailRequestBody;
}


export class SendCustomVerificationEmailResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  mailFromDomainNotVerifiedException?: any;

  @Metadata()
  messageRejected?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  sendCustomVerificationEmailResponse?: shared.SendCustomVerificationEmailResponse;

  @Metadata()
  sendingPausedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
