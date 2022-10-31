package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectXAmzTargetEnum string

const (
	DescribeProjectXAmzTargetEnumSageMakerDescribeProject DescribeProjectXAmzTargetEnum = "SageMaker.DescribeProject"
)

type DescribeProjectHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProjectRequest struct {
	Headers DescribeProjectHeaders
	Request shared.DescribeProjectInput `request:"mediaType=application/json"`
}

type DescribeProjectResponse struct {
	ContentType           string
	DescribeProjectOutput *shared.DescribeProjectOutput
	StatusCode            int64
}
