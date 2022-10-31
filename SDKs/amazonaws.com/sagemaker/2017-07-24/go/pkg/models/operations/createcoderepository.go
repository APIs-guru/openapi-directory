package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCodeRepositoryXAmzTargetEnum string

const (
	CreateCodeRepositoryXAmzTargetEnumSageMakerCreateCodeRepository CreateCodeRepositoryXAmzTargetEnum = "SageMaker.CreateCodeRepository"
)

type CreateCodeRepositoryHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCodeRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCodeRepositoryRequest struct {
	Headers CreateCodeRepositoryHeaders
	Request shared.CreateCodeRepositoryInput `request:"mediaType=application/json"`
}

type CreateCodeRepositoryResponse struct {
	ContentType                string
	CreateCodeRepositoryOutput *shared.CreateCodeRepositoryOutput
	StatusCode                 int64
}
