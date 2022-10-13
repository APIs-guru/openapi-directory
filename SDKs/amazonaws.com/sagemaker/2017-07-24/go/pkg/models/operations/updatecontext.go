package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContextXAmzTargetEnum string

const (
	UpdateContextXAmzTargetEnumSageMakerUpdateContext UpdateContextXAmzTargetEnum = "SageMaker.UpdateContext"
)

type UpdateContextHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContextXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateContextRequest struct {
	Headers UpdateContextHeaders
	Request shared.UpdateContextRequest `request:"mediaType=application/json"`
}

type UpdateContextResponse struct {
	ConflictException     *interface{}
	ContentType           string
	ResourceNotFound      *interface{}
	StatusCode            int64
	UpdateContextResponse *shared.UpdateContextResponse
}
