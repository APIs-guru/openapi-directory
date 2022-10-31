package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCompilationJobXAmzTargetEnum string

const (
	CreateCompilationJobXAmzTargetEnumSageMakerCreateCompilationJob CreateCompilationJobXAmzTargetEnum = "SageMaker.CreateCompilationJob"
)

type CreateCompilationJobHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCompilationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCompilationJobRequest struct {
	Headers CreateCompilationJobHeaders
	Request shared.CreateCompilationJobRequest `request:"mediaType=application/json"`
}

type CreateCompilationJobResponse struct {
	ContentType                  string
	CreateCompilationJobResponse *shared.CreateCompilationJobResponse
	ResourceInUse                *interface{}
	ResourceLimitExceeded        *interface{}
	StatusCode                   int64
}
