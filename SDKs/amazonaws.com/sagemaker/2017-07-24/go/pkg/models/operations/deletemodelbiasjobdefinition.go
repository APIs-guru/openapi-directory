package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelBiasJobDefinitionXAmzTargetEnum string

const (
	DeleteModelBiasJobDefinitionXAmzTargetEnumSageMakerDeleteModelBiasJobDefinition DeleteModelBiasJobDefinitionXAmzTargetEnum = "SageMaker.DeleteModelBiasJobDefinition"
)

type DeleteModelBiasJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelBiasJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteModelBiasJobDefinitionRequest struct {
	Headers DeleteModelBiasJobDefinitionHeaders
	Request shared.DeleteModelBiasJobDefinitionRequest `request:"mediaType=application/json"`
}

type DeleteModelBiasJobDefinitionResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
