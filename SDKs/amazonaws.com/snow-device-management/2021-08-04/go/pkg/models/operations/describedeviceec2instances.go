package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeviceEc2InstancesPathParams struct {
	ManagedDeviceID string `pathParam:"style=simple,explode=false,name=managedDeviceId"`
}

type DescribeDeviceEc2InstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDeviceEc2InstancesRequestBody struct {
	InstanceIds []string `json:"instanceIds"`
}

type DescribeDeviceEc2InstancesRequest struct {
	PathParams DescribeDeviceEc2InstancesPathParams
	Headers    DescribeDeviceEc2InstancesHeaders
	Request    DescribeDeviceEc2InstancesRequestBody `request:"mediaType=application/json"`
}

type DescribeDeviceEc2InstancesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeDeviceEc2Output   *shared.DescribeDeviceEc2Output
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
