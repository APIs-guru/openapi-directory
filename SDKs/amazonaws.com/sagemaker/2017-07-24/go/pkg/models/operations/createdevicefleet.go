package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeviceFleetXAmzTargetEnum string

const (
	CreateDeviceFleetXAmzTargetEnumSageMakerCreateDeviceFleet CreateDeviceFleetXAmzTargetEnum = "SageMaker.CreateDeviceFleet"
)

type CreateDeviceFleetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeviceFleetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDeviceFleetRequest struct {
	Headers CreateDeviceFleetHeaders
	Request shared.CreateDeviceFleetRequest `request:"mediaType=application/json"`
}

type CreateDeviceFleetResponse struct {
	ContentType           string
	ResourceInUse         *interface{}
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
