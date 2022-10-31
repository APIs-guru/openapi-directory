package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFlowDefinitionXAmzTargetEnum string

const (
	DescribeFlowDefinitionXAmzTargetEnumSageMakerDescribeFlowDefinition DescribeFlowDefinitionXAmzTargetEnum = "SageMaker.DescribeFlowDefinition"
)

type DescribeFlowDefinitionHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFlowDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeFlowDefinitionRequest struct {
	Headers DescribeFlowDefinitionHeaders
	Request shared.DescribeFlowDefinitionRequest `request:"mediaType=application/json"`
}

type DescribeFlowDefinitionResponse struct {
	ContentType                    string
	DescribeFlowDefinitionResponse *shared.DescribeFlowDefinitionResponse
	ResourceNotFound               *interface{}
	StatusCode                     int64
}
