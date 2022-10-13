package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateTextXAmzTargetEnum string

const (
	TranslateTextXAmzTargetEnumAwsShineFrontendService20170701TranslateText TranslateTextXAmzTargetEnum = "AWSShineFrontendService_20170701.TranslateText"
)

type TranslateTextHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TranslateTextXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TranslateTextRequest struct {
	Headers TranslateTextHeaders
	Request shared.TranslateTextRequest `request:"mediaType=application/json"`
}

type TranslateTextResponse struct {
	ContentType                            string
	DetectedLanguageLowConfidenceException *interface{}
	InternalServerException                *interface{}
	InvalidRequestException                *interface{}
	ResourceNotFoundException              *interface{}
	ServiceUnavailableException            *interface{}
	StatusCode                             int64
	TextSizeLimitExceededException         *interface{}
	TooManyRequestsException               *interface{}
	TranslateTextResponse                  *shared.TranslateTextResponse
	UnsupportedLanguagePairException       *interface{}
}
