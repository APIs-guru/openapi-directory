package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceRegistrationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeviceRegistrationRequestBody struct {
	DeviceFleetName string `json:"DeviceFleetName"`
	DeviceName      string `json:"DeviceName"`
}

type GetDeviceRegistrationRequest struct {
	Headers GetDeviceRegistrationHeaders
	Request GetDeviceRegistrationRequestBody `request:"mediaType=application/json"`
}

type GetDeviceRegistrationResponse struct {
	ContentType                 string
	GetDeviceRegistrationResult *shared.GetDeviceRegistrationResult
	InternalServiceException    *interface{}
	StatusCode                  int64
}
