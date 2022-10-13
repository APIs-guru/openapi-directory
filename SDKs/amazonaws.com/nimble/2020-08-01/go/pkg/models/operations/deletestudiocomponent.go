package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStudioComponentPathParams struct {
	StudioComponentID string `pathParam:"style=simple,explode=false,name=studioComponentId"`
	StudioID          string `pathParam:"style=simple,explode=false,name=studioId"`
}

type DeleteStudioComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteStudioComponentRequest struct {
	PathParams DeleteStudioComponentPathParams
	Headers    DeleteStudioComponentHeaders
}

type DeleteStudioComponentResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	DeleteStudioComponentResponse *shared.DeleteStudioComponentResponse
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
