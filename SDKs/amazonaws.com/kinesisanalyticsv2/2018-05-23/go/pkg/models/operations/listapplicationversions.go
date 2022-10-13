package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationVersionsXAmzTargetEnum string

const (
	ListApplicationVersionsXAmzTargetEnumKinesisAnalytics20180523ListApplicationVersions ListApplicationVersionsXAmzTargetEnum = "KinesisAnalytics_20180523.ListApplicationVersions"
)

type ListApplicationVersionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListApplicationVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListApplicationVersionsRequest struct {
	Headers ListApplicationVersionsHeaders
	Request shared.ListApplicationVersionsRequest `request:"mediaType=application/json"`
}

type ListApplicationVersionsResponse struct {
	ContentType                     string
	InvalidArgumentException        *interface{}
	ListApplicationVersionsResponse *shared.ListApplicationVersionsResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UnsupportedOperationException   *interface{}
}
