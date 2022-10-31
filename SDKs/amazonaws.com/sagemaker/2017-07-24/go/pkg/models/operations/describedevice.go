package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeviceXAmzTargetEnum string

const (
	DescribeDeviceXAmzTargetEnumSageMakerDescribeDevice DescribeDeviceXAmzTargetEnum = "SageMaker.DescribeDevice"
)

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeviceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
