package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelBiasJobDefinitionXAmzTargetEnum string

const (
	DescribeModelBiasJobDefinitionXAmzTargetEnumSageMakerDescribeModelBiasJobDefinition DescribeModelBiasJobDefinitionXAmzTargetEnum = "SageMaker.DescribeModelBiasJobDefinition"
)

type DescribeModelBiasJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelBiasJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeModelBiasJobDefinitionRequest struct {
	Headers DescribeModelBiasJobDefinitionHeaders
	Request shared.DescribeModelBiasJobDefinitionRequest `request:"mediaType=application/json"`
}

type DescribeModelBiasJobDefinitionResponse struct {
	ContentType                            string
	DescribeModelBiasJobDefinitionResponse *shared.DescribeModelBiasJobDefinitionResponse
	ResourceNotFound                       *interface{}
	StatusCode                             int64
}
