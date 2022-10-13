package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlgorithmXAmzTargetEnum string

const (
	CreateAlgorithmXAmzTargetEnumSageMakerCreateAlgorithm CreateAlgorithmXAmzTargetEnum = "SageMaker.CreateAlgorithm"
)

type CreateAlgorithmHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAlgorithmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAlgorithmRequest struct {
	Headers CreateAlgorithmHeaders
	Request shared.CreateAlgorithmInput `request:"mediaType=application/json"`
}

type CreateAlgorithmResponse struct {
	ContentType           string
	CreateAlgorithmOutput *shared.CreateAlgorithmOutput
	StatusCode            int64
}
