package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeResourceXAmzTargetEnum string

const (
	DescribeResourceXAmzTargetEnumWorkMailServiceDescribeResource DescribeResourceXAmzTargetEnum = "WorkMailService.DescribeResource"
)

type DescribeResourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeResourceRequest struct {
	Headers DescribeResourceHeaders
	Request shared.DescribeResourceRequest `request:"mediaType=application/json"`
}

type DescribeResourceResponse struct {
	ContentType                   string
	DescribeResourceResponse      *shared.DescribeResourceResponse
	EntityNotFoundException       *interface{}
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
