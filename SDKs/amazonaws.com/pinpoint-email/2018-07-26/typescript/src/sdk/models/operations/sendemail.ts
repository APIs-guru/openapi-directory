import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendEmailHeaders extends SpeakeasyBase {
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
}


// SendEmailRequestBodyContent
/** 
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
**/
export class SendEmailRequestBodyContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Raw" })
  raw?: shared.RawMessage;

  @SpeakeasyMetadata({ data: "json, name=Simple" })
  simple?: shared.Message;

  @SpeakeasyMetadata({ data: "json, name=Template" })
  template?: shared.Template;
}


// SendEmailRequestBodyDestination
/** 
 * An object that describes the recipients for an email.
**/
export class SendEmailRequestBodyDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BccAddresses" })
  bccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=CcAddresses" })
  ccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ToAddresses" })
  toAddresses?: string[];
}


export class SendEmailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: SendEmailRequestBodyContent;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: SendEmailRequestBodyDestination;

  @SpeakeasyMetadata({ data: "json, name=EmailTags", elemType: shared.MessageTag })
  emailTags?: shared.MessageTag[];

  @SpeakeasyMetadata({ data: "json, name=FeedbackForwardingEmailAddress" })
  feedbackForwardingEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplyToAddresses" })
  replyToAddresses?: string[];
}


export class SendEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendEmailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendEmailRequestBody;
}


export class SendEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountSuspendedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  mailFromDomainNotVerifiedException?: any;

  @SpeakeasyMetadata()
  messageRejected?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  sendEmailResponse?: shared.SendEmailResponse;

  @SpeakeasyMetadata()
  sendingPausedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
