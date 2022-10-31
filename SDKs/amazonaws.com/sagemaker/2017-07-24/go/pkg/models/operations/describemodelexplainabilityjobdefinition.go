package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelExplainabilityJobDefinitionXAmzTargetEnum string

const (
	DescribeModelExplainabilityJobDefinitionXAmzTargetEnumSageMakerDescribeModelExplainabilityJobDefinition DescribeModelExplainabilityJobDefinitionXAmzTargetEnum = "SageMaker.DescribeModelExplainabilityJobDefinition"
)

type DescribeModelExplainabilityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelExplainabilityJobDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeModelExplainabilityJobDefinitionRequest struct {
	Headers DescribeModelExplainabilityJobDefinitionHeaders
	Request shared.DescribeModelExplainabilityJobDefinitionRequest `request:"mediaType=application/json"`
}

type DescribeModelExplainabilityJobDefinitionResponse struct {
	ContentType                                      string
	DescribeModelExplainabilityJobDefinitionResponse *shared.DescribeModelExplainabilityJobDefinitionResponse
	ResourceNotFound                                 *interface{}
	StatusCode                                       int64
}
