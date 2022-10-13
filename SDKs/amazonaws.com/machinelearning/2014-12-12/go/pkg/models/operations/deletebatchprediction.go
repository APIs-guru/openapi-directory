package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBatchPredictionXAmzTargetEnum string

const (
	DeleteBatchPredictionXAmzTargetEnumAmazonMl20141212DeleteBatchPrediction DeleteBatchPredictionXAmzTargetEnum = "AmazonML_20141212.DeleteBatchPrediction"
)

type DeleteBatchPredictionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBatchPredictionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBatchPredictionRequest struct {
	Headers DeleteBatchPredictionHeaders
	Request shared.DeleteBatchPredictionInput `request:"mediaType=application/json"`
}

type DeleteBatchPredictionResponse struct {
	ContentType                 string
	DeleteBatchPredictionOutput *shared.DeleteBatchPredictionOutput
	InternalServerException     *interface{}
	InvalidInputException       *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
