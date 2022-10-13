package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHumanTaskUIXAmzTargetEnum string

const (
	CreateHumanTaskUIXAmzTargetEnumSageMakerCreateHumanTaskUI CreateHumanTaskUIXAmzTargetEnum = "SageMaker.CreateHumanTaskUi"
)

type CreateHumanTaskUIHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHumanTaskUIXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHumanTaskUIRequest struct {
	Headers CreateHumanTaskUIHeaders
	Request shared.CreateHumanTaskUIRequest `request:"mediaType=application/json"`
}

type CreateHumanTaskUIResponse struct {
	ContentType               string
	CreateHumanTaskUIResponse *shared.CreateHumanTaskUIResponse
	ResourceInUse             *interface{}
	ResourceLimitExceeded     *interface{}
	StatusCode                int64
}
