package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataQualityJobDefinitionXAmzTargetEnum string

const (
	CreateDataQualityJobDefinitionXAmzTargetEnumSageMakerCreateDataQualityJobDefinition CreateDataQualityJobDefinitionXAmzTargetEnum = "SageMaker.CreateDataQualityJobDefinition"
)

type CreateDataQualityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataQualityJobDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
