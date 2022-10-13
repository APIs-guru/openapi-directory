package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTrialComponentXAmzTargetEnum string

const (
	CreateTrialComponentXAmzTargetEnumSageMakerCreateTrialComponent CreateTrialComponentXAmzTargetEnum = "SageMaker.CreateTrialComponent"
)

type CreateTrialComponentHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTrialComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTrialComponentRequest struct {
	Headers CreateTrialComponentHeaders
	Request shared.CreateTrialComponentRequest `request:"mediaType=application/json"`
}

type CreateTrialComponentResponse struct {
	ContentType                  string
	CreateTrialComponentResponse *shared.CreateTrialComponentResponse
	ResourceLimitExceeded        *interface{}
	StatusCode                   int64
}
