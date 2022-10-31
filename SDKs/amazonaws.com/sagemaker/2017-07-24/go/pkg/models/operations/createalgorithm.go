package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlgorithmXAmzTargetEnum string

const (
	CreateAlgorithmXAmzTargetEnumSageMakerCreateAlgorithm CreateAlgorithmXAmzTargetEnum = "SageMaker.CreateAlgorithm"
)

type CreateAlgorithmHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAlgorithmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
