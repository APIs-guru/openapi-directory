package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagsXAmzTargetEnum string

const (
	CreateTagsXAmzTargetEnumWorkspacesServiceCreateTags CreateTagsXAmzTargetEnum = "WorkspacesService.CreateTags"
)

type CreateTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateTagsRequest struct {
	Headers CreateTagsHeaders
	Request shared.CreateTagsRequest `request:"mediaType=application/json"`
}

type CreateTagsResponse struct {
	ContentType                     string
	CreateTagsResult                map[string]interface{}
	InvalidParameterValuesException *interface{}
	ResourceLimitExceededException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
