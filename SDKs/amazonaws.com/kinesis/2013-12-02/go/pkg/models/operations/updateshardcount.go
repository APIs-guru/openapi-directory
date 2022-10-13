package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateShardCountXAmzTargetEnum string

const (
	UpdateShardCountXAmzTargetEnumKinesis20131202UpdateShardCount UpdateShardCountXAmzTargetEnum = "Kinesis_20131202.UpdateShardCount"
)

type UpdateShardCountHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateShardCountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateShardCountRequest struct {
	Headers UpdateShardCountHeaders
	Request shared.UpdateShardCountInput `request:"mediaType=application/json"`
}

type UpdateShardCountResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateShardCountOutput    *shared.UpdateShardCountOutput
}
