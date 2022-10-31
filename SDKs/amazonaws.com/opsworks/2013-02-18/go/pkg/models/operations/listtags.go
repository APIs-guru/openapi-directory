package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsXAmzTargetEnum string

const (
	ListTagsXAmzTargetEnumOpsWorks20130218ListTags ListTagsXAmzTargetEnum = "OpsWorks_20130218.ListTags"
)

type ListTagsHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTagsRequest struct {
	Headers ListTagsHeaders
	Request shared.ListTagsRequest `request:"mediaType=application/json"`
}

type ListTagsResponse struct {
	ContentType               string
	ListTagsResult            *shared.ListTagsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
