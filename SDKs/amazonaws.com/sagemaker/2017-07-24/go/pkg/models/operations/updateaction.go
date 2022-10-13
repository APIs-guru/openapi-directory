package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateActionXAmzTargetEnum string

const (
	UpdateActionXAmzTargetEnumSageMakerUpdateAction UpdateActionXAmzTargetEnum = "SageMaker.UpdateAction"
)

type UpdateActionHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateActionRequest struct {
	Headers UpdateActionHeaders
	Request shared.UpdateActionRequest `request:"mediaType=application/json"`
}

type UpdateActionResponse struct {
	ConflictException    *interface{}
	ContentType          string
	ResourceNotFound     *interface{}
	StatusCode           int64
	UpdateActionResponse *shared.UpdateActionResponse
}
