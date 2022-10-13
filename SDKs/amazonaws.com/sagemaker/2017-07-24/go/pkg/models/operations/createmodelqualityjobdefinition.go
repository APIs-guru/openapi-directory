package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelQualityJobDefinitionXAmzTargetEnum string

const (
	CreateModelQualityJobDefinitionXAmzTargetEnumSageMakerCreateModelQualityJobDefinition CreateModelQualityJobDefinitionXAmzTargetEnum = "SageMaker.CreateModelQualityJobDefinition"
)

type CreateModelQualityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelQualityJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateModelQualityJobDefinitionRequest struct {
	Headers CreateModelQualityJobDefinitionHeaders
	Request shared.CreateModelQualityJobDefinitionRequest `request:"mediaType=application/json"`
}

type CreateModelQualityJobDefinitionResponse struct {
	ContentType                             string
	CreateModelQualityJobDefinitionResponse *shared.CreateModelQualityJobDefinitionResponse
	ResourceInUse                           *interface{}
	ResourceLimitExceeded                   *interface{}
	StatusCode                              int64
}
