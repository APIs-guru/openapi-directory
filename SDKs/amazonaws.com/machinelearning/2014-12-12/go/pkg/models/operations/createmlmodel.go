package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMlModelXAmzTargetEnum string

const (
	CreateMlModelXAmzTargetEnumAmazonMl20141212CreateMlModel CreateMlModelXAmzTargetEnum = "AmazonML_20141212.CreateMLModel"
)

type CreateMlModelHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateMlModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateMlModelRequest struct {
	Headers CreateMlModelHeaders
	Request shared.CreateMlModelInput `request:"mediaType=application/json"`
}

type CreateMlModelResponse struct {
	ContentType                          string
	CreateMlModelOutput                  *shared.CreateMlModelOutput
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidInputException                *interface{}
	StatusCode                           int64
}
