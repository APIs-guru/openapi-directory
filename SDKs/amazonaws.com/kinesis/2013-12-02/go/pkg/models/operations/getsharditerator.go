package operations

import (
	"openapi/pkg/models/shared"
)

type GetShardIteratorXAmzTargetEnum string

const (
	GetShardIteratorXAmzTargetEnumKinesis20131202GetShardIterator GetShardIteratorXAmzTargetEnum = "Kinesis_20131202.GetShardIterator"
)

type GetShardIteratorHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetShardIteratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetShardIteratorRequest struct {
	Headers GetShardIteratorHeaders
	Request shared.GetShardIteratorInput `request:"mediaType=application/json"`
}

type GetShardIteratorResponse struct {
	ContentType                            string
	GetShardIteratorOutput                 *shared.GetShardIteratorOutput
	InvalidArgumentException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
