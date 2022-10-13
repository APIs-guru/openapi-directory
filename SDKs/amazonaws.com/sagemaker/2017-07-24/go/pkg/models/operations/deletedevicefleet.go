package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeviceFleetXAmzTargetEnum string

const (
	DeleteDeviceFleetXAmzTargetEnumSageMakerDeleteDeviceFleet DeleteDeviceFleetXAmzTargetEnum = "SageMaker.DeleteDeviceFleet"
)

type DeleteDeviceFleetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDeviceFleetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDeviceFleetRequest struct {
	Headers DeleteDeviceFleetHeaders
	Request shared.DeleteDeviceFleetRequest `request:"mediaType=application/json"`
}

type DeleteDeviceFleetResponse struct {
	ContentType   string
	ResourceInUse *interface{}
	StatusCode    int64
}
