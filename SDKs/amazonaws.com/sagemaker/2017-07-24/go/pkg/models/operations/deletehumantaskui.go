package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHumanTaskUIXAmzTargetEnum string

const (
	DeleteHumanTaskUIXAmzTargetEnumSageMakerDeleteHumanTaskUI DeleteHumanTaskUIXAmzTargetEnum = "SageMaker.DeleteHumanTaskUi"
)

type DeleteHumanTaskUIHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteHumanTaskUIXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteHumanTaskUIRequest struct {
	Headers DeleteHumanTaskUIHeaders
	Request shared.DeleteHumanTaskUIRequest `request:"mediaType=application/json"`
}

type DeleteHumanTaskUIResponse struct {
	ContentType               string
	DeleteHumanTaskUIResponse map[string]interface{}
	ResourceNotFound          *interface{}
	StatusCode                int64
}
