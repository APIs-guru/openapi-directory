package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagsXAmzTargetEnum string

const (
	DeleteTagsXAmzTargetEnumWorkspacesServiceDeleteTags DeleteTagsXAmzTargetEnum = "WorkspacesService.DeleteTags"
)

type DeleteTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTagsRequest struct {
	Headers DeleteTagsHeaders
	Request shared.DeleteTagsRequest `request:"mediaType=application/json"`
}

type DeleteTagsResponse struct {
	ContentType                     string
	DeleteTagsResult                map[string]interface{}
	InvalidParameterValuesException *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
