package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvaluationXAmzTargetEnum string

const (
	GetEvaluationXAmzTargetEnumAmazonMl20141212GetEvaluation GetEvaluationXAmzTargetEnum = "AmazonML_20141212.GetEvaluation"
)

type GetEvaluationHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEvaluationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEvaluationRequest struct {
	Headers GetEvaluationHeaders
	Request shared.GetEvaluationInput `request:"mediaType=application/json"`
}

type GetEvaluationResponse struct {
	ContentType               string
	GetEvaluationOutput       *shared.GetEvaluationOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
