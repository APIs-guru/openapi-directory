package operations

import (
	"openapi/pkg/models/shared"
)

type PutRawMessageContentPathParams struct {
	MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
}

type PutRawMessageContentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutRawMessageContentRequestBodyContent
// <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>
type PutRawMessageContentRequestBodyContent struct {
	S3Reference *shared.S3Reference `json:"s3Reference,omitempty"`
}

type PutRawMessageContentRequestBody struct {
	Content PutRawMessageContentRequestBodyContent `json:"content"`
}

type PutRawMessageContentRequest struct {
	PathParams PutRawMessageContentPathParams
	Headers    PutRawMessageContentHeaders
	Request    PutRawMessageContentRequestBody `request:"mediaType=application/json"`
}

type PutRawMessageContentResponse struct {
	ContentType                  string
	InvalidContentLocation       *interface{}
	MessageFrozen                *interface{}
	MessageRejected              *interface{}
	PutRawMessageContentResponse map[string]interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
