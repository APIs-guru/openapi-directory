package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamQueryParams struct {
	ExclusiveStartShardID *string `queryParam:"style=form,explode=true,name=ExclusiveStartShardId"`
	Limit                 *string `queryParam:"style=form,explode=true,name=Limit"`
}

type DescribeStreamXAmzTargetEnum string

const (
	DescribeStreamXAmzTargetEnumKinesis20131202DescribeStream DescribeStreamXAmzTargetEnum = "Kinesis_20131202.DescribeStream"
)

type DescribeStreamHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeStreamRequest struct {
	QueryParams DescribeStreamQueryParams
	Headers     DescribeStreamHeaders
	Request     shared.DescribeStreamInput `request:"mediaType=application/json"`
}

type DescribeStreamResponse struct {
	ContentType               string
	DescribeStreamOutput      *shared.DescribeStreamOutput
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
