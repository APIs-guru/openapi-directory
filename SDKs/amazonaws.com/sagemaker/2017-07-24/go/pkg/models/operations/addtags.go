package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsXAmzTargetEnum string

const (
	AddTagsXAmzTargetEnumSageMakerAddTags AddTagsXAmzTargetEnum = "SageMaker.AddTags"
)

type AddTagsHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddTagsRequest struct {
	Headers AddTagsHeaders
	Request shared.AddTagsInput `request:"mediaType=application/json"`
}

type AddTagsResponse struct {
	AddTagsOutput *shared.AddTagsOutput
	ContentType   string
	StatusCode    int64
}
