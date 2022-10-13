package operations

import (
	"openapi/pkg/models/shared"
)

type BatchEvaluateGeofencesPathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
}

type BatchEvaluateGeofencesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchEvaluateGeofencesRequestBody struct {
	DevicePositionUpdates []shared.DevicePositionUpdate `json:"DevicePositionUpdates"`
}

type BatchEvaluateGeofencesRequest struct {
	PathParams BatchEvaluateGeofencesPathParams
	Headers    BatchEvaluateGeofencesHeaders
	Request    BatchEvaluateGeofencesRequestBody `request:"mediaType=application/json"`
}

type BatchEvaluateGeofencesResponse struct {
	AccessDeniedException          *interface{}
	BatchEvaluateGeofencesResponse *shared.BatchEvaluateGeofencesResponse
	ContentType                    string
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
