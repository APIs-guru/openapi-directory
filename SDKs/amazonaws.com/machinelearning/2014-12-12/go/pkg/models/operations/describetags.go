package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTagsXAmzTargetEnum string

const (
	DescribeTagsXAmzTargetEnumAmazonMl20141212DescribeTags DescribeTagsXAmzTargetEnum = "AmazonML_20141212.DescribeTags"
)

type DescribeTagsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTagsRequest struct {
	Headers DescribeTagsHeaders
	Request shared.DescribeTagsInput `request:"mediaType=application/json"`
}

type DescribeTagsResponse struct {
	ContentType               string
	DescribeTagsOutput        *shared.DescribeTagsOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
