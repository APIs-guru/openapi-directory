package operations

import (
	"openapi/pkg/models/shared"
)

type GetReplicationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReplicationConfigurationRequestBody struct {
	SourceServerID string `json:"sourceServerID"`
}

type GetReplicationConfigurationRequest struct {
	Headers GetReplicationConfigurationHeaders
	Request GetReplicationConfigurationRequestBody `request:"mediaType=application/json"`
}

type GetReplicationConfigurationResponse struct {
	ContentType                   string
	ReplicationConfiguration      *shared.ReplicationConfiguration
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UninitializedAccountException *interface{}
}
