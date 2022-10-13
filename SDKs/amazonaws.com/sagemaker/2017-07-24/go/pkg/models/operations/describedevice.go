package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeviceXAmzTargetEnum string

const (
	DescribeDeviceXAmzTargetEnumSageMakerDescribeDevice DescribeDeviceXAmzTargetEnum = "SageMaker.DescribeDevice"
)

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeviceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDeviceRequest struct {
	Headers DescribeDeviceHeaders
	Request shared.DescribeDeviceRequest `request:"mediaType=application/json"`
}

type DescribeDeviceResponse struct {
	ContentType            string
	DescribeDeviceResponse *shared.DescribeDeviceResponse
	ResourceNotFound       *interface{}
	StatusCode             int64
}
