import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendBulkEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that contains the body of the message. You can specify a template message.
**/
export declare class SendBulkEmailRequestBodyDefaultContent extends SpeakeasyBase {
    template?: shared.Template;
}
export declare class SendBulkEmailRequestBody extends SpeakeasyBase {
    bulkEmailEntries: shared.BulkEmailEntry[];
    configurationSetName?: string;
    defaultContent: SendBulkEmailRequestBodyDefaultContent;
    defaultEmailTags?: shared.MessageTag[];
    feedbackForwardingEmailAddress?: string;
    feedbackForwardingEmailAddressIdentityArn?: string;
    fromEmailAddress?: string;
    fromEmailAddressIdentityArn?: string;
    replyToAddresses?: string[];
}
export declare class SendBulkEmailRequest extends SpeakeasyBase {
    headers: SendBulkEmailHeaders;
    request: SendBulkEmailRequestBody;
}
export declare class SendBulkEmailResponse extends SpeakeasyBase {
    accountSuspendedException?: any;
    badRequestException?: any;
    contentType: string;
    limitExceededException?: any;
    mailFromDomainNotVerifiedException?: any;
    messageRejected?: any;
    notFoundException?: any;
    sendBulkEmailResponse?: shared.SendBulkEmailResponse;
    sendingPausedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
