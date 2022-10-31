package operations

import (
	"openapi/pkg/models/shared"
)

type MergeShardsXAmzTargetEnum string

const (
	MergeShardsXAmzTargetEnumKinesis20131202MergeShards MergeShardsXAmzTargetEnum = "Kinesis_20131202.MergeShards"
)

type MergeShardsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        MergeShardsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
