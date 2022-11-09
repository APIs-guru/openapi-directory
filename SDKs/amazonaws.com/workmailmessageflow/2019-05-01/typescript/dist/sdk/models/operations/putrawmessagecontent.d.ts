import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutRawMessageContentPathParams extends SpeakeasyBase {
    messageId: string;
}
export declare class PutRawMessageContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>
**/
export declare class PutRawMessageContentRequestBodyContent extends SpeakeasyBase {
    s3Reference?: shared.S3Reference;
}
export declare class PutRawMessageContentRequestBody extends SpeakeasyBase {
    content: PutRawMessageContentRequestBodyContent;
}
export declare class PutRawMessageContentRequest extends SpeakeasyBase {
    pathParams: PutRawMessageContentPathParams;
    headers: PutRawMessageContentHeaders;
    request: PutRawMessageContentRequestBody;
}
export declare class PutRawMessageContentResponse extends SpeakeasyBase {
    contentType: string;
    invalidContentLocation?: any;
    messageFrozen?: any;
    messageRejected?: any;
    putRawMessageContentResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
