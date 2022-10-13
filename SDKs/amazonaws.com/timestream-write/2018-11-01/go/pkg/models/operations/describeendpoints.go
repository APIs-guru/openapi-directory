package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointsXAmzTargetEnum string

const (
	DescribeEndpointsXAmzTargetEnumTimestream20181101DescribeEndpoints DescribeEndpointsXAmzTargetEnum = "Timestream_20181101.DescribeEndpoints"
)

type DescribeEndpointsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEndpointsRequest struct {
	Headers DescribeEndpointsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeEndpointsResponse struct {
	ContentType               string
	DescribeEndpointsResponse *shared.DescribeEndpointsResponse
	InternalServerException   *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
