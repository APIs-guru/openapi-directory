package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdateDevicePositionPathParams struct {
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type BatchUpdateDevicePositionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchUpdateDevicePositionRequestBody struct {
	Updates []shared.DevicePositionUpdate `json:"Updates"`
}

type BatchUpdateDevicePositionRequest struct {
	PathParams BatchUpdateDevicePositionPathParams
	Headers    BatchUpdateDevicePositionHeaders
	Request    BatchUpdateDevicePositionRequestBody `request:"mediaType=application/json"`
}

type BatchUpdateDevicePositionResponse struct {
	AccessDeniedException             *interface{}
	BatchUpdateDevicePositionResponse *shared.BatchUpdateDevicePositionResponse
	ContentType                       string
	InternalServerException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
