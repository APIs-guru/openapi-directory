package operations

import (
	"openapi/pkg/models/shared"
)

type StartAppReplicationXAmzTargetEnum string

const (
	StartAppReplicationXAmzTargetEnumAwsServerMigrationServiceV20161024StartAppReplication StartAppReplicationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.StartAppReplication"
)

type StartAppReplicationHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartAppReplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartAppReplicationRequest struct {
	Headers StartAppReplicationHeaders
	Request shared.StartAppReplicationRequest `request:"mediaType=application/json"`
}

type StartAppReplicationResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StartAppReplicationResponse       map[string]interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
