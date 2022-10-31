package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBatchPredictionsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeBatchPredictionsXAmzTargetEnum string

const (
	DescribeBatchPredictionsXAmzTargetEnumAmazonMl20141212DescribeBatchPredictions DescribeBatchPredictionsXAmzTargetEnum = "AmazonML_20141212.DescribeBatchPredictions"
)

type DescribeBatchPredictionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBatchPredictionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeBatchPredictionsRequest struct {
	QueryParams DescribeBatchPredictionsQueryParams
	Headers     DescribeBatchPredictionsHeaders
	Request     shared.DescribeBatchPredictionsInput `request:"mediaType=application/json"`
}

type DescribeBatchPredictionsResponse struct {
	ContentType                    string
	DescribeBatchPredictionsOutput *shared.DescribeBatchPredictionsOutput
	InternalServerException        *interface{}
	InvalidInputException          *interface{}
	StatusCode                     int64
}
