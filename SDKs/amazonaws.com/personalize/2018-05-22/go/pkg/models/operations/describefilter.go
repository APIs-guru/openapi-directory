package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFilterXAmzTargetEnum string

const (
	DescribeFilterXAmzTargetEnumAmazonPersonalizeDescribeFilter DescribeFilterXAmzTargetEnum = "AmazonPersonalize.DescribeFilter"
)

type DescribeFilterHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFilterRequest struct {
	Headers DescribeFilterHeaders
	Request shared.DescribeFilterRequest `request:"mediaType=application/json"`
}

type DescribeFilterResponse struct {
	ContentType               string
	DescribeFilterResponse    *shared.DescribeFilterResponse
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
