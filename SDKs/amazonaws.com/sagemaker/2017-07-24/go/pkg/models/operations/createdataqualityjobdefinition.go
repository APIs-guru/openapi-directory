package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataQualityJobDefinitionXAmzTargetEnum string

const (
	CreateDataQualityJobDefinitionXAmzTargetEnumSageMakerCreateDataQualityJobDefinition CreateDataQualityJobDefinitionXAmzTargetEnum = "SageMaker.CreateDataQualityJobDefinition"
)

type CreateDataQualityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataQualityJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDataQualityJobDefinitionRequest struct {
	Headers CreateDataQualityJobDefinitionHeaders
	Request shared.CreateDataQualityJobDefinitionRequest `request:"mediaType=application/json"`
}

type CreateDataQualityJobDefinitionResponse struct {
	ContentType                            string
	CreateDataQualityJobDefinitionResponse *shared.CreateDataQualityJobDefinitionResponse
	ResourceInUse                          *interface{}
	ResourceLimitExceeded                  *interface{}
	StatusCode                             int64
}
