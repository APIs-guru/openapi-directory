package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLayersXAmzTargetEnum string

const (
	DescribeLayersXAmzTargetEnumOpsWorks20130218DescribeLayers DescribeLayersXAmzTargetEnum = "OpsWorks_20130218.DescribeLayers"
)

type DescribeLayersHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLayersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLayersRequest struct {
	Headers DescribeLayersHeaders
	Request shared.DescribeLayersRequest `request:"mediaType=application/json"`
}

type DescribeLayersResponse struct {
	ContentType               string
	DescribeLayersResult      *shared.DescribeLayersResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
