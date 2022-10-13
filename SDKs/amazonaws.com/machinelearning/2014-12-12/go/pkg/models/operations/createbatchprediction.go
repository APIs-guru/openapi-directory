package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBatchPredictionXAmzTargetEnum string

const (
	CreateBatchPredictionXAmzTargetEnumAmazonMl20141212CreateBatchPrediction CreateBatchPredictionXAmzTargetEnum = "AmazonML_20141212.CreateBatchPrediction"
)

type CreateBatchPredictionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBatchPredictionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBatchPredictionRequest struct {
	Headers CreateBatchPredictionHeaders
	Request shared.CreateBatchPredictionInput `request:"mediaType=application/json"`
}

type CreateBatchPredictionResponse struct {
	ContentType                          string
	CreateBatchPredictionOutput          *shared.CreateBatchPredictionOutput
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidInputException                *interface{}
	StatusCode                           int64
}
