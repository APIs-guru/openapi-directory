package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveRegionsFromReplicationXAmzTargetEnum string

const (
	RemoveRegionsFromReplicationXAmzTargetEnumSecretsmanagerRemoveRegionsFromReplication RemoveRegionsFromReplicationXAmzTargetEnum = "secretsmanager.RemoveRegionsFromReplication"
)

type RemoveRegionsFromReplicationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveRegionsFromReplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveRegionsFromReplicationRequest struct {
	Headers RemoveRegionsFromReplicationHeaders
	Request shared.RemoveRegionsFromReplicationRequest `request:"mediaType=application/json"`
}

type RemoveRegionsFromReplicationResponse struct {
	ContentType                          string
	InternalServiceError                 *interface{}
	InvalidParameterException            *interface{}
	InvalidRequestException              *interface{}
	RemoveRegionsFromReplicationResponse *shared.RemoveRegionsFromReplicationResponse
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
