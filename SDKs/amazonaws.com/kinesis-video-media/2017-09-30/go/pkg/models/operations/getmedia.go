package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetMediaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// GetMediaRequestBodyStartSelector
// <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
type GetMediaRequestBodyStartSelector struct {
	AfterFragmentNumber *string                       `json:"AfterFragmentNumber,omitempty"`
	ContinuationToken   *string                       `json:"ContinuationToken,omitempty"`
	StartSelectorType   *shared.StartSelectorTypeEnum `json:"StartSelectorType,omitempty"`
	StartTimestamp      *time.Time                    `json:"StartTimestamp,omitempty"`
}

type GetMediaRequestBody struct {
	StartSelector GetMediaRequestBodyStartSelector `json:"StartSelector"`
	StreamArn     *string                          `json:"StreamARN,omitempty"`
	StreamName    *string                          `json:"StreamName,omitempty"`
}

type GetMediaRequest struct {
	Headers GetMediaHeaders
	Request GetMediaRequestBody `request:"mediaType=application/json"`
}

type GetMediaResponse struct {
	ClientLimitExceededException     *interface{}
	ConnectionLimitExceededException *interface{}
	ContentType                      string
	GetMediaOutput                   *shared.GetMediaOutput
	InvalidArgumentException         *interface{}
	InvalidEndpointException         *interface{}
	NotAuthorizedException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
