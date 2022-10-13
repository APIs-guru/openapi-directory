package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCodeRepositoryXAmzTargetEnum string

const (
	DeleteCodeRepositoryXAmzTargetEnumSageMakerDeleteCodeRepository DeleteCodeRepositoryXAmzTargetEnum = "SageMaker.DeleteCodeRepository"
)

type DeleteCodeRepositoryHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCodeRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCodeRepositoryRequest struct {
	Headers DeleteCodeRepositoryHeaders
	Request shared.DeleteCodeRepositoryInput `request:"mediaType=application/json"`
}

type DeleteCodeRepositoryResponse struct {
	ContentType string
	StatusCode  int64
}
