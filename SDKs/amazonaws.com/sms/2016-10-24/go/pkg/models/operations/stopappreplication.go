package operations

import (
	"openapi/pkg/models/shared"
)

type StopAppReplicationXAmzTargetEnum string

const (
	StopAppReplicationXAmzTargetEnumAwsServerMigrationServiceV20161024StopAppReplication StopAppReplicationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.StopAppReplication"
)

type StopAppReplicationHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopAppReplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopAppReplicationRequest struct {
	Headers StopAppReplicationHeaders
	Request shared.StopAppReplicationRequest `request:"mediaType=application/json"`
}

type StopAppReplicationResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	StopAppReplicationResponse        map[string]interface{}
	UnauthorizedOperationException    *interface{}
}
