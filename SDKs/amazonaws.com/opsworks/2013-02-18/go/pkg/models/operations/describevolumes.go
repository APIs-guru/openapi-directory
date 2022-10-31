package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVolumesXAmzTargetEnum string

const (
	DescribeVolumesXAmzTargetEnumOpsWorks20130218DescribeVolumes DescribeVolumesXAmzTargetEnum = "OpsWorks_20130218.DescribeVolumes"
)

type DescribeVolumesHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeVolumesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeVolumesRequest struct {
	Headers DescribeVolumesHeaders
	Request shared.DescribeVolumesRequest `request:"mediaType=application/json"`
}

type DescribeVolumesResponse struct {
	ContentType               string
	DescribeVolumesResult     *shared.DescribeVolumesResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
