package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelBiasJobDefinitionXAmzTargetEnum string

const (
	CreateModelBiasJobDefinitionXAmzTargetEnumSageMakerCreateModelBiasJobDefinition CreateModelBiasJobDefinitionXAmzTargetEnum = "SageMaker.CreateModelBiasJobDefinition"
)

type CreateModelBiasJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelBiasJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateModelBiasJobDefinitionRequest struct {
	Headers CreateModelBiasJobDefinitionHeaders
	Request shared.CreateModelBiasJobDefinitionRequest `request:"mediaType=application/json"`
}

type CreateModelBiasJobDefinitionResponse struct {
	ContentType                          string
	CreateModelBiasJobDefinitionResponse *shared.CreateModelBiasJobDefinitionResponse
	ResourceInUse                        *interface{}
	ResourceLimitExceeded                *interface{}
	StatusCode                           int64
}
