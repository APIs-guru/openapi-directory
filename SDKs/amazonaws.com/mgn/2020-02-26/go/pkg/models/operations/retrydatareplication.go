package operations

import (
	"openapi/pkg/models/shared"
)

type RetryDataReplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RetryDataReplicationRequestBody struct {
	SourceServerID string `json:"sourceServerID"`
}

type RetryDataReplicationRequest struct {
	Headers RetryDataReplicationHeaders
	Request RetryDataReplicationRequestBody `request:"mediaType=application/json"`
}

type RetryDataReplicationResponse struct {
	ContentType                   string
	ResourceNotFoundException     *interface{}
	SourceServer                  *shared.SourceServer
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
