package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelExplainabilityJobDefinitionXAmzTargetEnum string

const (
	CreateModelExplainabilityJobDefinitionXAmzTargetEnumSageMakerCreateModelExplainabilityJobDefinition CreateModelExplainabilityJobDefinitionXAmzTargetEnum = "SageMaker.CreateModelExplainabilityJobDefinition"
)

type CreateModelExplainabilityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelExplainabilityJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateModelExplainabilityJobDefinitionRequest struct {
	Headers CreateModelExplainabilityJobDefinitionHeaders
	Request shared.CreateModelExplainabilityJobDefinitionRequest `request:"mediaType=application/json"`
}

type CreateModelExplainabilityJobDefinitionResponse struct {
	ContentType                                    string
	CreateModelExplainabilityJobDefinitionResponse *shared.CreateModelExplainabilityJobDefinitionResponse
	ResourceInUse                                  *interface{}
	ResourceLimitExceeded                          *interface{}
	StatusCode                                     int64
}
