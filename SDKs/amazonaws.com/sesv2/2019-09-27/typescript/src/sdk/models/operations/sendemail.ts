import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendEmailHeaders extends SpeakeasyBase {
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


// SendEmailRequestBodyContent
/** 
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
**/
export class SendEmailRequestBodyContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Raw" })
  raw?: shared.RawMessage;

  @Metadata({ data: "json, name=Simple" })
  simple?: shared.Message;

  @Metadata({ data: "json, name=Template" })
  template?: shared.Template;
}


// SendEmailRequestBodyDestination
/** 
 * An object that describes the recipients for an email.
**/
export class SendEmailRequestBodyDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=BccAddresses" })
  bccAddresses?: string[];

  @Metadata({ data: "json, name=CcAddresses" })
  ccAddresses?: string[];

  @Metadata({ data: "json, name=ToAddresses" })
  toAddresses?: string[];
}


// SendEmailRequestBodyListManagementOptions
/** 
 * An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
**/
export class SendEmailRequestBodyListManagementOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListName" })
  contactListName?: string;

  @Metadata({ data: "json, name=TopicName" })
  topicName?: string;
}


export class SendEmailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "json, name=Content" })
  content: SendEmailRequestBodyContent;

  @Metadata({ data: "json, name=Destination" })
  destination?: SendEmailRequestBodyDestination;

  @Metadata({ data: "json, name=EmailTags", elemType: shared.MessageTag })
  emailTags?: shared.MessageTag[];

  @Metadata({ data: "json, name=FeedbackForwardingEmailAddress" })
  feedbackForwardingEmailAddress?: string;

  @Metadata({ data: "json, name=FeedbackForwardingEmailAddressIdentityArn" })
  feedbackForwardingEmailAddressIdentityArn?: string;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @Metadata({ data: "json, name=FromEmailAddressIdentityArn" })
  fromEmailAddressIdentityArn?: string;

  @Metadata({ data: "json, name=ListManagementOptions" })
  listManagementOptions?: SendEmailRequestBodyListManagementOptions;

  @Metadata({ data: "json, name=ReplyToAddresses" })
  replyToAddresses?: string[];
}


export class SendEmailRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendEmailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendEmailRequestBody;
}


export class SendEmailResponse extends SpeakeasyBase {
  @Metadata()
  accountSuspendedException?: any;

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
  sendEmailResponse?: shared.SendEmailResponse;

  @Metadata()
  sendingPausedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
