package operations

import (
	"openapi/pkg/models/shared"
)

type StartOnDemandReplicationRunXAmzTargetEnum string

const (
	StartOnDemandReplicationRunXAmzTargetEnumAwsServerMigrationServiceV20161024StartOnDemandReplicationRun StartOnDemandReplicationRunXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun"
)

type StartOnDemandReplicationRunHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartOnDemandReplicationRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartOnDemandReplicationRunRequest struct {
	Headers StartOnDemandReplicationRunHeaders
	Request shared.StartOnDemandReplicationRunRequest `request:"mediaType=application/json"`
}

type StartOnDemandReplicationRunResponse struct {
	ContentType                          string
	DryRunOperationException             *interface{}
	InvalidParameterException            *interface{}
	MissingRequiredParameterException    *interface{}
	OperationNotPermittedException       *interface{}
	ReplicationRunLimitExceededException *interface{}
	StartOnDemandReplicationRunResponse  *shared.StartOnDemandReplicationRunResponse
	StatusCode                           int64
	UnauthorizedOperationException       *interface{}
}
