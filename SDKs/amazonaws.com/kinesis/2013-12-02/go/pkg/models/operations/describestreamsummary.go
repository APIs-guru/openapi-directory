package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamSummaryXAmzTargetEnum string

const (
	DescribeStreamSummaryXAmzTargetEnumKinesis20131202DescribeStreamSummary DescribeStreamSummaryXAmzTargetEnum = "Kinesis_20131202.DescribeStreamSummary"
)

type DescribeStreamSummaryHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStreamSummaryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStreamSummaryRequest struct {
	Headers DescribeStreamSummaryHeaders
	Request shared.DescribeStreamSummaryInput `request:"mediaType=application/json"`
}

type DescribeStreamSummaryResponse struct {
	ContentType                 string
	DescribeStreamSummaryOutput *shared.DescribeStreamSummaryOutput
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
