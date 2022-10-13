package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFlowDefinitionXAmzTargetEnum string

const (
	DeleteFlowDefinitionXAmzTargetEnumSageMakerDeleteFlowDefinition DeleteFlowDefinitionXAmzTargetEnum = "SageMaker.DeleteFlowDefinition"
)

type DeleteFlowDefinitionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFlowDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFlowDefinitionRequest struct {
	Headers DeleteFlowDefinitionHeaders
	Request shared.DeleteFlowDefinitionRequest `request:"mediaType=application/json"`
}

type DeleteFlowDefinitionResponse struct {
	ContentType                  string
	DeleteFlowDefinitionResponse map[string]interface{}
	ResourceInUse                *interface{}
	ResourceNotFound             *interface{}
	StatusCode                   int64
}
