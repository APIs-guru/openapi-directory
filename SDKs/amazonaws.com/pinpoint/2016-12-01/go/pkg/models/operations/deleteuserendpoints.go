package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserEndpointsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	UserID        string `pathParam:"style=simple,explode=false,name=user-id"`
}

type DeleteUserEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteUserEndpointsRequest struct {
	PathParams DeleteUserEndpointsPathParams
	Headers    DeleteUserEndpointsHeaders
}

type DeleteUserEndpointsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteUserEndpointsResponse  *shared.DeleteUserEndpointsResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
