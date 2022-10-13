package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeResourceXAmzTargetEnum string

const (
	DescribeResourceXAmzTargetEnumWorkMailServiceDescribeResource DescribeResourceXAmzTargetEnum = "WorkMailService.DescribeResource"
)

type DescribeResourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
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
