package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppReplicationConfigurationXAmzTargetEnum string

const (
	GetAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppReplicationConfiguration GetAppReplicationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration"
)

type GetAppReplicationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppReplicationConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAppReplicationConfigurationRequest struct {
	Headers GetAppReplicationConfigurationHeaders
	Request shared.GetAppReplicationConfigurationRequest `request:"mediaType=application/json"`
}

type GetAppReplicationConfigurationResponse struct {
	ContentType                            string
	GetAppReplicationConfigurationResponse *shared.GetAppReplicationConfigurationResponse
	InternalError                          *interface{}
	InvalidParameterException              *interface{}
	MissingRequiredParameterException      *interface{}
	OperationNotPermittedException         *interface{}
	StatusCode                             int64
	UnauthorizedOperationException         *interface{}
}
