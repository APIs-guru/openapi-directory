package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBatchInferenceJobXAmzTargetEnum string

const (
	DescribeBatchInferenceJobXAmzTargetEnumAmazonPersonalizeDescribeBatchInferenceJob DescribeBatchInferenceJobXAmzTargetEnum = "AmazonPersonalize.DescribeBatchInferenceJob"
)

type DescribeBatchInferenceJobHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBatchInferenceJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeBatchInferenceJobRequest struct {
	Headers DescribeBatchInferenceJobHeaders
	Request shared.DescribeBatchInferenceJobRequest `request:"mediaType=application/json"`
}

type DescribeBatchInferenceJobResponse struct {
	ContentType                       string
	DescribeBatchInferenceJobResponse *shared.DescribeBatchInferenceJobResponse
	InvalidInputException             *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
