package operations

import (
	"openapi/pkg/models/shared"
)

type BatchPutGeofencePathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
}

type BatchPutGeofenceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchPutGeofenceRequestBody struct {
	Entries []shared.BatchPutGeofenceRequestEntry `json:"Entries"`
}

type BatchPutGeofenceRequest struct {
	PathParams BatchPutGeofencePathParams
	Headers    BatchPutGeofenceHeaders
	Request    BatchPutGeofenceRequestBody `request:"mediaType=application/json"`
}

type BatchPutGeofenceResponse struct {
	AccessDeniedException     *interface{}
	BatchPutGeofenceResponse  *shared.BatchPutGeofenceResponse
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
