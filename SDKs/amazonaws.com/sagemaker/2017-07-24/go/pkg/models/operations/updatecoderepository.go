package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCodeRepositoryXAmzTargetEnum string

const (
	UpdateCodeRepositoryXAmzTargetEnumSageMakerUpdateCodeRepository UpdateCodeRepositoryXAmzTargetEnum = "SageMaker.UpdateCodeRepository"
)

type UpdateCodeRepositoryHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCodeRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCodeRepositoryRequest struct {
	Headers UpdateCodeRepositoryHeaders
	Request shared.UpdateCodeRepositoryInput `request:"mediaType=application/json"`
}

type UpdateCodeRepositoryResponse struct {
	ContentType                string
	StatusCode                 int64
	UpdateCodeRepositoryOutput *shared.UpdateCodeRepositoryOutput
}
