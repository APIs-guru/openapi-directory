package operations

import (
	"openapi/pkg/models/shared"
)

type PredictXAmzTargetEnum string

const (
	PredictXAmzTargetEnumAmazonMl20141212Predict PredictXAmzTargetEnum = "AmazonML_20141212.Predict"
)

type PredictHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PredictXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PredictRequest struct {
	Headers PredictHeaders
	Request shared.PredictInput `request:"mediaType=application/json"`
}

type PredictResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	InvalidInputException        *interface{}
	LimitExceededException       *interface{}
	PredictOutput                *shared.PredictOutput
	PredictorNotMountedException *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
