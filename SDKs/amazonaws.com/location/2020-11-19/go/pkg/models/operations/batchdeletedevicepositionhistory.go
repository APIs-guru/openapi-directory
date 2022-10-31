package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteDevicePositionHistoryPathParams struct {
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type BatchDeleteDevicePositionHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchDeleteDevicePositionHistoryRequestBody struct {
	DeviceIds []string `json:"DeviceIds"`
}

type BatchDeleteDevicePositionHistoryRequest struct {
	PathParams BatchDeleteDevicePositionHistoryPathParams
	Headers    BatchDeleteDevicePositionHistoryHeaders
	Request    BatchDeleteDevicePositionHistoryRequestBody `request:"mediaType=application/json"`
}

type BatchDeleteDevicePositionHistoryResponse struct {
	AccessDeniedException                    *interface{}
	BatchDeleteDevicePositionHistoryResponse *shared.BatchDeleteDevicePositionHistoryResponse
	ContentType                              string
	InternalServerException                  *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
	ValidationException                      *interface{}
}
