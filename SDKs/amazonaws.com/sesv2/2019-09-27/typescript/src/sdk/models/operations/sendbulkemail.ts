import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendBulkEmailHeaders extends SpeakeasyBase {
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


// SendBulkEmailRequestBodyDefaultContent
/** 
 * An object that contains the body of the message. You can specify a template message.
**/
export class SendBulkEmailRequestBodyDefaultContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Template" })
  template?: shared.Template;
}


export class SendBulkEmailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkEmailEntries", elemType: shared.BulkEmailEntry })
  bulkEmailEntries: shared.BulkEmailEntry[];

  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultContent" })
  defaultContent: SendBulkEmailRequestBodyDefaultContent;

  @SpeakeasyMetadata({ data: "json, name=DefaultEmailTags", elemType: shared.MessageTag })
  defaultEmailTags?: shared.MessageTag[];

  @SpeakeasyMetadata({ data: "json, name=FeedbackForwardingEmailAddress" })
  feedbackForwardingEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=FeedbackForwardingEmailAddressIdentityArn" })
  feedbackForwardingEmailAddressIdentityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddressIdentityArn" })
  fromEmailAddressIdentityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplyToAddresses" })
  replyToAddresses?: string[];
}


export class SendBulkEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendBulkEmailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendBulkEmailRequestBody;
}


export class SendBulkEmailResponse extends SpeakeasyBase {
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
  sendBulkEmailResponse?: shared.SendBulkEmailResponse;

  @SpeakeasyMetadata()
  sendingPausedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
