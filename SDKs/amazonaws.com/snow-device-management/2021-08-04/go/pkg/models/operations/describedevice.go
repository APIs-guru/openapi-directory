package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDevicePathParams struct {
	ManagedDeviceID string `pathParam:"style=simple,explode=false,name=managedDeviceId"`
}

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
