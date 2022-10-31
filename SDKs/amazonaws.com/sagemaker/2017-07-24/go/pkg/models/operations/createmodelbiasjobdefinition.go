package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelBiasJobDefinitionXAmzTargetEnum string

const (
	CreateModelBiasJobDefinitionXAmzTargetEnumSageMakerCreateModelBiasJobDefinition CreateModelBiasJobDefinitionXAmzTargetEnum = "SageMaker.CreateModelBiasJobDefinition"
)

type CreateModelBiasJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelBiasJobDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
