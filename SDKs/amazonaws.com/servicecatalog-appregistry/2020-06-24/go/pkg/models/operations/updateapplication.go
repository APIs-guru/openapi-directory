package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApplicationPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type UpdateApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateApplicationRequestBody struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type UpdateApplicationRequest struct {
	PathParams UpdateApplicationPathParams
	Headers    UpdateApplicationHeaders
	Request    UpdateApplicationRequestBody `request:"mediaType=application/json"`
}

type UpdateApplicationResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateApplicationResponse *shared.UpdateApplicationResponse
}
