package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamConsumerXAmzTargetEnum string

const (
	DescribeStreamConsumerXAmzTargetEnumKinesis20131202DescribeStreamConsumer DescribeStreamConsumerXAmzTargetEnum = "Kinesis_20131202.DescribeStreamConsumer"
)

type DescribeStreamConsumerHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStreamConsumerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStreamConsumerRequest struct {
	Headers DescribeStreamConsumerHeaders
	Request shared.DescribeStreamConsumerInput `request:"mediaType=application/json"`
}

type DescribeStreamConsumerResponse struct {
	ContentType                  string
	DescribeStreamConsumerOutput *shared.DescribeStreamConsumerOutput
	InvalidArgumentException     *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
