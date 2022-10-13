package operations

import (
	"openapi/pkg/models/shared"
)

type SplitShardXAmzTargetEnum string

const (
	SplitShardXAmzTargetEnumKinesis20131202SplitShard SplitShardXAmzTargetEnum = "Kinesis_20131202.SplitShard"
)

type SplitShardHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SplitShardXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SplitShardRequest struct {
	Headers SplitShardHeaders
	Request shared.SplitShardInput `request:"mediaType=application/json"`
}

type SplitShardResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
