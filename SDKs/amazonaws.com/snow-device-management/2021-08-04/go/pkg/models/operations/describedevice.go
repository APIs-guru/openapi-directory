package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDevicePathParams struct {
	ManagedDeviceID string `pathParam:"style=simple,explode=false,name=managedDeviceId"`
}

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDeviceRequest struct {
	PathParams DescribeDevicePathParams
	Headers    DescribeDeviceHeaders
}

type DescribeDeviceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeDeviceOutput      *shared.DescribeDeviceOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
