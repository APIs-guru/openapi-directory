package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAppHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAppRequestBodyCreateApplicationRequest struct {
	Name *string           `json:"Name,omitempty"`
	Tags map[string]string `json:"tags,omitempty"`
}

type CreateAppRequestBody struct {
	CreateApplicationRequest CreateAppRequestBodyCreateApplicationRequest `json:"CreateApplicationRequest"`
}

type CreateAppRequest struct {
	Headers CreateAppHeaders
	Request CreateAppRequestBody `request:"mediaType=application/json"`
}

type CreateAppResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateAppResponse            *shared.CreateAppResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
