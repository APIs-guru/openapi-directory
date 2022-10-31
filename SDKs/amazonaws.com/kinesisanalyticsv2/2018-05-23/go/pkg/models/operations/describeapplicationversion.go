package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeApplicationVersionXAmzTargetEnum string

const (
	DescribeApplicationVersionXAmzTargetEnumKinesisAnalytics20180523DescribeApplicationVersion DescribeApplicationVersionXAmzTargetEnum = "KinesisAnalytics_20180523.DescribeApplicationVersion"
)

type DescribeApplicationVersionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeApplicationVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeApplicationVersionRequest struct {
	Headers DescribeApplicationVersionHeaders
	Request shared.DescribeApplicationVersionRequest `request:"mediaType=application/json"`
}

type DescribeApplicationVersionResponse struct {
	ContentType                        string
	DescribeApplicationVersionResponse *shared.DescribeApplicationVersionResponse
	InvalidArgumentException           *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	UnsupportedOperationException      *interface{}
}
