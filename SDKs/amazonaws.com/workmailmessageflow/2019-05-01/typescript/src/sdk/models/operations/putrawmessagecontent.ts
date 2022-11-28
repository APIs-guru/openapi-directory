import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRawMessageContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: string;
}


export class PutRawMessageContentHeaders extends SpeakeasyBase {
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


// PutRawMessageContentRequestBodyContent
/** 
 * <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>
**/
export class PutRawMessageContentRequestBodyContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Reference" })
  s3Reference?: shared.S3Reference;
}


export class PutRawMessageContentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: PutRawMessageContentRequestBodyContent;
}


export class PutRawMessageContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRawMessageContentPathParams;

  @SpeakeasyMetadata()
  headers: PutRawMessageContentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutRawMessageContentRequestBody;
}


export class PutRawMessageContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidContentLocation?: any;

  @SpeakeasyMetadata()
  messageFrozen?: any;

  @SpeakeasyMetadata()
  messageRejected?: any;

  @SpeakeasyMetadata()
  putRawMessageContentResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
