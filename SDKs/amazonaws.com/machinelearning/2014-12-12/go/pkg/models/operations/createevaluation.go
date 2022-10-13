package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEvaluationXAmzTargetEnum string

const (
	CreateEvaluationXAmzTargetEnumAmazonMl20141212CreateEvaluation CreateEvaluationXAmzTargetEnum = "AmazonML_20141212.CreateEvaluation"
)

type CreateEvaluationHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEvaluationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEvaluationRequest struct {
	Headers CreateEvaluationHeaders
	Request shared.CreateEvaluationInput `request:"mediaType=application/json"`
}

type CreateEvaluationResponse struct {
	ContentType                          string
	CreateEvaluationOutput               *shared.CreateEvaluationOutput
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidInputException                *interface{}
	StatusCode                           int64
}
