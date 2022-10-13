package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointConfigXAmzTargetEnum string

const (
	DescribeEndpointConfigXAmzTargetEnumSageMakerDescribeEndpointConfig DescribeEndpointConfigXAmzTargetEnum = "SageMaker.DescribeEndpointConfig"
)

type DescribeEndpointConfigHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEndpointConfigRequest struct {
	Headers DescribeEndpointConfigHeaders
	Request shared.DescribeEndpointConfigInput `request:"mediaType=application/json"`
}

type DescribeEndpointConfigResponse struct {
	ContentType                  string
	DescribeEndpointConfigOutput *shared.DescribeEndpointConfigOutput
	StatusCode                   int64
}
