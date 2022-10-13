package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationSettingsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type GetApplicationSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetApplicationSettingsRequest struct {
	PathParams GetApplicationSettingsPathParams
	Headers    GetApplicationSettingsHeaders
}

type GetApplicationSettingsResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetApplicationSettingsResponse *shared.GetApplicationSettingsResponse
	InternalServerErrorException   *interface{}
	MethodNotAllowedException      *interface{}
	NotFoundException              *interface{}
	PayloadTooLargeException       *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
