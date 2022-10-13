package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTagsXAmzTargetEnum string

const (
	DescribeTagsXAmzTargetEnumWorkspacesServiceDescribeTags DescribeTagsXAmzTargetEnum = "WorkspacesService.DescribeTags"
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
	Request shared.DescribeTagsRequest `request:"mediaType=application/json"`
}

type DescribeTagsResponse struct {
	ContentType               string
	DescribeTagsResult        *shared.DescribeTagsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
