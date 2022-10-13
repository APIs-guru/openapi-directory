package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromResourceXAmzTargetEnum string

const (
	RemoveTagsFromResourceXAmzTargetEnumAmazonSsmRemoveTagsFromResource RemoveTagsFromResourceXAmzTargetEnum = "AmazonSSM.RemoveTagsFromResource"
)

type RemoveTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsFromResourceRequest struct {
	Headers RemoveTagsFromResourceHeaders
	Request shared.RemoveTagsFromResourceRequest `request:"mediaType=application/json"`
}

type RemoveTagsFromResourceResponse struct {
	ContentType                  string
	InternalServerError          *interface{}
	InvalidResourceID            *interface{}
	InvalidResourceType          *interface{}
	RemoveTagsFromResourceResult map[string]interface{}
	StatusCode                   int64
	TooManyUpdates               *interface{}
}
