package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDataQualityJobDefinitionXAmzTargetEnum string

const (
	DescribeDataQualityJobDefinitionXAmzTargetEnumSageMakerDescribeDataQualityJobDefinition DescribeDataQualityJobDefinitionXAmzTargetEnum = "SageMaker.DescribeDataQualityJobDefinition"
)

type DescribeDataQualityJobDefinitionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDataQualityJobDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDataQualityJobDefinitionRequest struct {
	Headers DescribeDataQualityJobDefinitionHeaders
	Request shared.DescribeDataQualityJobDefinitionRequest `request:"mediaType=application/json"`
}

type DescribeDataQualityJobDefinitionResponse struct {
	ContentType                              string
	DescribeDataQualityJobDefinitionResponse *shared.DescribeDataQualityJobDefinitionResponse
	ResourceNotFound                         *interface{}
	StatusCode                               int64
}
