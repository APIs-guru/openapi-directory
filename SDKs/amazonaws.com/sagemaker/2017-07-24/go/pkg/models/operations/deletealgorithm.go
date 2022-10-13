package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAlgorithmXAmzTargetEnum string

const (
	DeleteAlgorithmXAmzTargetEnumSageMakerDeleteAlgorithm DeleteAlgorithmXAmzTargetEnum = "SageMaker.DeleteAlgorithm"
)

type DeleteAlgorithmHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAlgorithmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAlgorithmRequest struct {
	Headers DeleteAlgorithmHeaders
	Request shared.DeleteAlgorithmInput `request:"mediaType=application/json"`
}

type DeleteAlgorithmResponse struct {
	ContentType string
	StatusCode  int64
}
