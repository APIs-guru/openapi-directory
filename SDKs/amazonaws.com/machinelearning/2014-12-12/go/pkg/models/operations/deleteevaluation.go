package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEvaluationXAmzTargetEnum string

const (
	DeleteEvaluationXAmzTargetEnumAmazonMl20141212DeleteEvaluation DeleteEvaluationXAmzTargetEnum = "AmazonML_20141212.DeleteEvaluation"
)

type DeleteEvaluationHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEvaluationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEvaluationRequest struct {
	Headers DeleteEvaluationHeaders
	Request shared.DeleteEvaluationInput `request:"mediaType=application/json"`
}

type DeleteEvaluationResponse struct {
	ContentType               string
	DeleteEvaluationOutput    *shared.DeleteEvaluationOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
