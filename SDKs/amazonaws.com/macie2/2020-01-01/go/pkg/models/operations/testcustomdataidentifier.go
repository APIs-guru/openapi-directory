package operations

import (
	"openapi/pkg/models/shared"
)

type TestCustomDataIdentifierHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TestCustomDataIdentifierRequestBody struct {
	IgnoreWords          []string `json:"ignoreWords,omitempty"`
	Keywords             []string `json:"keywords,omitempty"`
	MaximumMatchDistance *int64   `json:"maximumMatchDistance,omitempty"`
	Regex                string   `json:"regex"`
	SampleText           string   `json:"sampleText"`
}

type TestCustomDataIdentifierRequest struct {
	Headers TestCustomDataIdentifierHeaders
	Request TestCustomDataIdentifierRequestBody `request:"mediaType=application/json"`
}

type TestCustomDataIdentifierResponse struct {
	AccessDeniedException            *interface{}
	ConflictException                *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	TestCustomDataIdentifierResponse *shared.TestCustomDataIdentifierResponse
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
