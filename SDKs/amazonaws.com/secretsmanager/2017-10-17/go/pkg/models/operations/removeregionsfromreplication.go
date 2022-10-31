package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveRegionsFromReplicationXAmzTargetEnum string

const (
	RemoveRegionsFromReplicationXAmzTargetEnumSecretsmanagerRemoveRegionsFromReplication RemoveRegionsFromReplicationXAmzTargetEnum = "secretsmanager.RemoveRegionsFromReplication"
)

type RemoveRegionsFromReplicationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveRegionsFromReplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
