package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCodeRepositoryXAmzTargetEnum string

const (
	CreateCodeRepositoryXAmzTargetEnumSageMakerCreateCodeRepository CreateCodeRepositoryXAmzTargetEnum = "SageMaker.CreateCodeRepository"
)

type CreateCodeRepositoryHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCodeRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
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
