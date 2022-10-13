package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorldTemplateBodyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetWorldTemplateBodyRequestBody struct {
	GenerationJob *string `json:"generationJob"`
	Template      *string `json:"template"`
}

type GetWorldTemplateBodyRequest struct {
	Headers GetWorldTemplateBodyHeaders
	Request GetWorldTemplateBodyRequestBody `request:"mediaType=application/json"`
}

type GetWorldTemplateBodyResponse struct {
	ContentType                  string
	GetWorldTemplateBodyResponse *shared.GetWorldTemplateBodyResponse
	InternalServerException      *interface{}
	InvalidParameterException    *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
