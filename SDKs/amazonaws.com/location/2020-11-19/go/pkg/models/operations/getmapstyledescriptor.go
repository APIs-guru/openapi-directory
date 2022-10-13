package operations

import (
	"openapi/pkg/models/shared"
)

type GetMapStyleDescriptorPathParams struct {
	MapName string `pathParam:"style=simple,explode=false,name=MapName"`
}

type GetMapStyleDescriptorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMapStyleDescriptorRequest struct {
	PathParams GetMapStyleDescriptorPathParams
	Headers    GetMapStyleDescriptorHeaders
}

type GetMapStyleDescriptorResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	GetMapStyleDescriptorResponse *shared.GetMapStyleDescriptorResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
