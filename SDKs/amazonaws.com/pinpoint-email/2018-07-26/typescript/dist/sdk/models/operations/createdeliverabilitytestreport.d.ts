import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeliverabilityTestReportHeaders extends SpeakeasyBase {
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
export declare class CreateDeliverabilityTestReportRequestBodyContent extends SpeakeasyBase {
    raw?: shared.RawMessage;
    simple?: shared.Message;
    template?: shared.Template;
}
export declare class CreateDeliverabilityTestReportRequestBody extends SpeakeasyBase {
    content: CreateDeliverabilityTestReportRequestBodyContent;
    fromEmailAddress: string;
    reportName?: string;
    tags?: shared.Tag[];
}
export declare class CreateDeliverabilityTestReportRequest extends SpeakeasyBase {
    headers: CreateDeliverabilityTestReportHeaders;
    request: CreateDeliverabilityTestReportRequestBody;
}
export declare class CreateDeliverabilityTestReportResponse extends SpeakeasyBase {
    accountSuspendedException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createDeliverabilityTestReportResponse?: shared.CreateDeliverabilityTestReportResponse;
    limitExceededException?: any;
    mailFromDomainNotVerifiedException?: any;
    messageRejected?: any;
    notFoundException?: any;
    sendingPausedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
