package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetMediaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

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
