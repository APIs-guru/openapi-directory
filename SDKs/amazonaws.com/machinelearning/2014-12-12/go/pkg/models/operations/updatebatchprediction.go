package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBatchPredictionXAmzTargetEnum string

const (
	UpdateBatchPredictionXAmzTargetEnumAmazonMl20141212UpdateBatchPrediction UpdateBatchPredictionXAmzTargetEnum = "AmazonML_20141212.UpdateBatchPrediction"
)

type UpdateBatchPredictionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBatchPredictionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateBatchPredictionRequest struct {
	Headers UpdateBatchPredictionHeaders
	Request shared.UpdateBatchPredictionInput `request:"mediaType=application/json"`
}

type UpdateBatchPredictionResponse struct {
	ContentType                 string
	InternalServerException     *interface{}
	InvalidInputException       *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	UpdateBatchPredictionOutput *shared.UpdateBatchPredictionOutput
}
