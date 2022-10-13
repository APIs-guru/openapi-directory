package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagsXAmzTargetEnum string

const (
	DeleteTagsXAmzTargetEnumSageMakerDeleteTags DeleteTagsXAmzTargetEnum = "SageMaker.DeleteTags"
)

type DeleteTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTagsRequest struct {
	Headers DeleteTagsHeaders
	Request shared.DeleteTagsInput `request:"mediaType=application/json"`
}

type DeleteTagsResponse struct {
	ContentType      string
	DeleteTagsOutput map[string]interface{}
	StatusCode       int64
}
