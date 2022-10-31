package operations

import (
	"openapi/pkg/models/shared"
)

type StopReplicationToReplicaXAmzTargetEnum string

const (
	StopReplicationToReplicaXAmzTargetEnumSecretsmanagerStopReplicationToReplica StopReplicationToReplicaXAmzTargetEnum = "secretsmanager.StopReplicationToReplica"
)

type StopReplicationToReplicaHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopReplicationToReplicaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopReplicationToReplicaRequest struct {
	Headers StopReplicationToReplicaHeaders
	Request shared.StopReplicationToReplicaRequest `request:"mediaType=application/json"`
}

type StopReplicationToReplicaResponse struct {
	ContentType                      string
	InternalServiceError             *interface{}
	InvalidParameterException        *interface{}
	InvalidRequestException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	StopReplicationToReplicaResponse *shared.StopReplicationToReplicaResponse
}
