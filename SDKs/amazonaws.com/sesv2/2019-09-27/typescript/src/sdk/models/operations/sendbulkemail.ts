import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendBulkEmailHeaders extends SpeakeasyBase {
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


// SendBulkEmailRequestBodyDefaultContent
/** 
 * An object that contains the body of the message. You can specify a template message.
**/
export class SendBulkEmailRequestBodyDefaultContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Template" })
  template?: shared.Template;
}


export class SendBulkEmailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkEmailEntries", elemType: shared.BulkEmailEntry })
  bulkEmailEntries: shared.BulkEmailEntry[];

  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "json, name=DefaultContent" })
  defaultContent: SendBulkEmailRequestBodyDefaultContent;

  @Metadata({ data: "json, name=DefaultEmailTags", elemType: shared.MessageTag })
  defaultEmailTags?: shared.MessageTag[];

  @Metadata({ data: "json, name=FeedbackForwardingEmailAddress" })
  feedbackForwardingEmailAddress?: string;

  @Metadata({ data: "json, name=FeedbackForwardingEmailAddressIdentityArn" })
  feedbackForwardingEmailAddressIdentityArn?: string;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @Metadata({ data: "json, name=FromEmailAddressIdentityArn" })
  fromEmailAddressIdentityArn?: string;

  @Metadata({ data: "json, name=ReplyToAddresses" })
  replyToAddresses?: string[];
}


export class SendBulkEmailRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendBulkEmailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendBulkEmailRequestBody;
}


export class SendBulkEmailResponse extends SpeakeasyBase {
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
  sendBulkEmailResponse?: shared.SendBulkEmailResponse;

  @Metadata()
  sendingPausedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
