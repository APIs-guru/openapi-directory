package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrialComponentXAmzTargetEnum string

const (
	UpdateTrialComponentXAmzTargetEnumSageMakerUpdateTrialComponent UpdateTrialComponentXAmzTargetEnum = "SageMaker.UpdateTrialComponent"
)

type UpdateTrialComponentHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTrialComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTrialComponentRequest struct {
	Headers UpdateTrialComponentHeaders
	Request shared.UpdateTrialComponentRequest `request:"mediaType=application/json"`
}

type UpdateTrialComponentResponse struct {
	ConflictException            *interface{}
	ContentType                  string
	ResourceNotFound             *interface{}
	StatusCode                   int64
	UpdateTrialComponentResponse *shared.UpdateTrialComponentResponse
}
