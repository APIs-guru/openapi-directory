package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomDataIdentifierHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCustomDataIdentifierRequestBody struct {
	ClientToken          *string           `json:"clientToken"`
	Description          *string           `json:"description"`
	IgnoreWords          []string          `json:"ignoreWords"`
	Keywords             []string          `json:"keywords"`
	MaximumMatchDistance *int64            `json:"maximumMatchDistance"`
	Name                 *string           `json:"name"`
	Regex                *string           `json:"regex"`
	Tags                 map[string]string `json:"tags"`
}

type CreateCustomDataIdentifierRequest struct {
	Headers CreateCustomDataIdentifierHeaders
	Request CreateCustomDataIdentifierRequestBody `request:"mediaType=application/json"`
}

type CreateCustomDataIdentifierResponse struct {
	AccessDeniedException              *interface{}
	ConflictException                  *interface{}
	ContentType                        string
	CreateCustomDataIdentifierResponse *shared.CreateCustomDataIdentifierResponse
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	ServiceQuotaExceededException      *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
