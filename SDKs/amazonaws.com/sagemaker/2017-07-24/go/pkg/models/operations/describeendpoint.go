package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointXAmzTargetEnum string

const (
	DescribeEndpointXAmzTargetEnumSageMakerDescribeEndpoint DescribeEndpointXAmzTargetEnum = "SageMaker.DescribeEndpoint"
)

type DescribeEndpointHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEndpointRequest struct {
	Headers DescribeEndpointHeaders
	Request shared.DescribeEndpointInput `request:"mediaType=application/json"`
}

type DescribeEndpointResponse struct {
	ContentType            string
	DescribeEndpointOutput *shared.DescribeEndpointOutput
	StatusCode             int64
}
