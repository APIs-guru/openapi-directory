package operations

import (
	"openapi/pkg/models/shared"
)

type MergeShardsXAmzTargetEnum string

const (
	MergeShardsXAmzTargetEnumKinesis20131202MergeShards MergeShardsXAmzTargetEnum = "Kinesis_20131202.MergeShards"
)

type MergeShardsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MergeShardsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MergeShardsRequest struct {
	Headers MergeShardsHeaders
	Request shared.MergeShardsInput `request:"mediaType=application/json"`
}

type MergeShardsResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
