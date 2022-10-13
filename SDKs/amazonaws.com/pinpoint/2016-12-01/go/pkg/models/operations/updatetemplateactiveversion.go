package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTemplateActiveVersionPathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
	TemplateType string `pathParam:"style=simple,explode=false,name=template-type"`
}

type UpdateTemplateActiveVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest struct {
	Version *string `json:"Version"`
}

type UpdateTemplateActiveVersionRequestBody struct {
	TemplateActiveVersionRequest UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest `json:"TemplateActiveVersionRequest"`
}

type UpdateTemplateActiveVersionRequest struct {
	PathParams UpdateTemplateActiveVersionPathParams
	Headers    UpdateTemplateActiveVersionHeaders
	Request    UpdateTemplateActiveVersionRequestBody `request:"mediaType=application/json"`
}

type UpdateTemplateActiveVersionResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	ForbiddenException                  *interface{}
	InternalServerErrorException        *interface{}
	MethodNotAllowedException           *interface{}
	NotFoundException                   *interface{}
	PayloadTooLargeException            *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
	UpdateTemplateActiveVersionResponse *shared.UpdateTemplateActiveVersionResponse
}
