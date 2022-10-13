package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeofencePathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
	GeofenceID     string `pathParam:"style=simple,explode=false,name=GeofenceId"`
}

type GetGeofenceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGeofenceRequest struct {
	PathParams GetGeofencePathParams
	Headers    GetGeofenceHeaders
}

type GetGeofenceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetGeofenceResponse       *shared.GetGeofenceResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
