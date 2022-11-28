import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
**/
export declare class SendEmailRequestBodyContent extends SpeakeasyBase {
    raw?: shared.RawMessage;
    simple?: shared.Message;
    template?: shared.Template;
}
/**
 * An object that describes the recipients for an email.
**/
export declare class SendEmailRequestBodyDestination extends SpeakeasyBase {
    bccAddresses?: string[];
    ccAddresses?: string[];
    toAddresses?: string[];
}
export declare class SendEmailRequestBody extends SpeakeasyBase {
    configurationSetName?: string;
    content: SendEmailRequestBodyContent;
    destination: SendEmailRequestBodyDestination;
    emailTags?: shared.MessageTag[];
    feedbackForwardingEmailAddress?: string;
    fromEmailAddress?: string;
    replyToAddresses?: string[];
}
export declare class SendEmailRequest extends SpeakeasyBase {
    headers: SendEmailHeaders;
    request: SendEmailRequestBody;
}
export declare class SendEmailResponse extends SpeakeasyBase {
    accountSuspendedException?: any;
    badRequestException?: any;
    contentType: string;
    limitExceededException?: any;
    mailFromDomainNotVerifiedException?: any;
    messageRejected?: any;
    notFoundException?: any;
    sendEmailResponse?: shared.SendEmailResponse;
    sendingPausedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
