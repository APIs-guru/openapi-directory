package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStudioComponentPathParams struct {
	StudioComponentID string `pathParam:"style=simple,explode=false,name=studioComponentId"`
	StudioID          string `pathParam:"style=simple,explode=false,name=studioId"`
}

type DeleteStudioComponentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
