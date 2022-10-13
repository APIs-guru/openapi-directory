package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelExplainabilityJobDefinitionXAmzTargetEnum string

const (
	DeleteModelExplainabilityJobDefinitionXAmzTargetEnumSageMakerDeleteModelExplainabilityJobDefinition DeleteModelExplainabilityJobDefinitionXAmzTargetEnum = "SageMaker.DeleteModelExplainabilityJobDefinition"
)

type DeleteModelExplainabilityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelExplainabilityJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteModelExplainabilityJobDefinitionRequest struct {
	Headers DeleteModelExplainabilityJobDefinitionHeaders
	Request shared.DeleteModelExplainabilityJobDefinitionRequest `request:"mediaType=application/json"`
}

type DeleteModelExplainabilityJobDefinitionResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
