package operations

import (
	"openapi/pkg/models/shared"
)

type PutAppReplicationConfigurationXAmzTargetEnum string

const (
	PutAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppReplicationConfiguration PutAppReplicationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration"
)

type PutAppReplicationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAppReplicationConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutAppReplicationConfigurationRequest struct {
	Headers PutAppReplicationConfigurationHeaders
	Request shared.PutAppReplicationConfigurationRequest `request:"mediaType=application/json"`
}

type PutAppReplicationConfigurationResponse struct {
	ContentType                            string
	InternalError                          *interface{}
	InvalidParameterException              *interface{}
	MissingRequiredParameterException      *interface{}
	OperationNotPermittedException         *interface{}
	PutAppReplicationConfigurationResponse map[string]interface{}
	StatusCode                             int64
	UnauthorizedOperationException         *interface{}
}
