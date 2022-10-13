package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContextXAmzTargetEnum string

const (
	DeleteContextXAmzTargetEnumSageMakerDeleteContext DeleteContextXAmzTargetEnum = "SageMaker.DeleteContext"
)

type DeleteContextHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContextXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteContextRequest struct {
	Headers DeleteContextHeaders
	Request shared.DeleteContextRequest `request:"mediaType=application/json"`
}

type DeleteContextResponse struct {
	ContentType           string
	DeleteContextResponse *shared.DeleteContextResponse
	ResourceNotFound      *interface{}
	StatusCode            int64
}
