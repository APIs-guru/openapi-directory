package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCodeRepositoryXAmzTargetEnum string

const (
	DeleteCodeRepositoryXAmzTargetEnumSageMakerDeleteCodeRepository DeleteCodeRepositoryXAmzTargetEnum = "SageMaker.DeleteCodeRepository"
)

type DeleteCodeRepositoryHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCodeRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteCodeRepositoryRequest struct {
	Headers DeleteCodeRepositoryHeaders
	Request shared.DeleteCodeRepositoryInput `request:"mediaType=application/json"`
}

type DeleteCodeRepositoryResponse struct {
	ContentType string
	StatusCode  int64
}
