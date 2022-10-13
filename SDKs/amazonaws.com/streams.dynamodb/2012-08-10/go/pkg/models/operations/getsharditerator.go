package operations

import (
	"openapi/pkg/models/shared"
)

type GetShardIteratorXAmzTargetEnum string

const (
	GetShardIteratorXAmzTargetEnumDynamoDbStreams20120810GetShardIterator GetShardIteratorXAmzTargetEnum = "DynamoDBStreams_20120810.GetShardIterator"
)

type GetShardIteratorHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetShardIteratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetShardIteratorRequest struct {
	Headers GetShardIteratorHeaders
	Request shared.GetShardIteratorInput `request:"mediaType=application/json"`
}

type GetShardIteratorResponse struct {
	ContentType                string
	GetShardIteratorOutput     *shared.GetShardIteratorOutput
	InternalServerError        *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	TrimmedDataAccessException *interface{}
}
