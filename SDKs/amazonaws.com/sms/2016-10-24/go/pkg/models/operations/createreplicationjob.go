package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicationJobXAmzTargetEnum string

const (
	CreateReplicationJobXAmzTargetEnumAwsServerMigrationServiceV20161024CreateReplicationJob CreateReplicationJobXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.CreateReplicationJob"
)

type CreateReplicationJobHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateReplicationJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateReplicationJobRequest struct {
	Headers CreateReplicationJobHeaders
	Request shared.CreateReplicationJobRequest `request:"mediaType=application/json"`
}

type CreateReplicationJobResponse struct {
	ContentType                          string
	CreateReplicationJobResponse         *shared.CreateReplicationJobResponse
	InternalError                        *interface{}
	InvalidParameterException            *interface{}
	MissingRequiredParameterException    *interface{}
	NoConnectorsAvailableException       *interface{}
	OperationNotPermittedException       *interface{}
	ReplicationJobAlreadyExistsException *interface{}
	ServerCannotBeReplicatedException    *interface{}
	StatusCode                           int64
	TemporarilyUnavailableException      *interface{}
	UnauthorizedOperationException       *interface{}
}
