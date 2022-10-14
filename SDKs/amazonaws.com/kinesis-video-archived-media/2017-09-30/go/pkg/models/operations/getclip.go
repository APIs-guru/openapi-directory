package operations

import (
	"openapi/pkg/models/shared"
)

type GetClipHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetClipRequestBodyClipFragmentSelector struct {
	FragmentSelectorType *shared.ClipFragmentSelectorTypeEnum `json:"FragmentSelectorType,omitempty"`
	TimestampRange       *shared.ClipTimestampRange           `json:"TimestampRange,omitempty"`
}

type GetClipRequestBody struct {
	ClipFragmentSelector GetClipRequestBodyClipFragmentSelector `json:"ClipFragmentSelector"`
	StreamArn            *string                                `json:"StreamARN,omitempty"`
	StreamName           *string                                `json:"StreamName,omitempty"`
}

type GetClipRequest struct {
	Headers GetClipHeaders
	Request GetClipRequestBody `request:"mediaType=application/json"`
}

type GetClipResponse struct {
	ClientLimitExceededException        *interface{}
	ContentType                         string
	GetClipOutput                       *shared.GetClipOutput
	InvalidArgumentException            *interface{}
	InvalidCodecPrivateDataException    *interface{}
	InvalidMediaFrameException          *interface{}
	MissingCodecPrivateDataException    *interface{}
	NoDataRetentionException            *interface{}
	NotAuthorizedException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	UnsupportedStreamMediaTypeException *interface{}
}
