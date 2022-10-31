package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCompilationJobXAmzTargetEnum string

const (
	DescribeCompilationJobXAmzTargetEnumSageMakerDescribeCompilationJob DescribeCompilationJobXAmzTargetEnum = "SageMaker.DescribeCompilationJob"
)

type DescribeCompilationJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCompilationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeCompilationJobRequest struct {
	Headers DescribeCompilationJobHeaders
	Request shared.DescribeCompilationJobRequest `request:"mediaType=application/json"`
}

type DescribeCompilationJobResponse struct {
	ContentType                    string
	DescribeCompilationJobResponse *shared.DescribeCompilationJobResponse
	ResourceNotFound               *interface{}
	StatusCode                     int64
}
