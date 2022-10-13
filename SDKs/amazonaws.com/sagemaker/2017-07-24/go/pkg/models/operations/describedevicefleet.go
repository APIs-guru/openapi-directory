package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeviceFleetXAmzTargetEnum string

const (
	DescribeDeviceFleetXAmzTargetEnumSageMakerDescribeDeviceFleet DescribeDeviceFleetXAmzTargetEnum = "SageMaker.DescribeDeviceFleet"
)

type DescribeDeviceFleetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeviceFleetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDeviceFleetRequest struct {
	Headers DescribeDeviceFleetHeaders
	Request shared.DescribeDeviceFleetRequest `request:"mediaType=application/json"`
}

type DescribeDeviceFleetResponse struct {
	ContentType                 string
	DescribeDeviceFleetResponse *shared.DescribeDeviceFleetResponse
	ResourceNotFound            *interface{}
	StatusCode                  int64
}
