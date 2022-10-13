package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppReplicationConfigurationXAmzTargetEnum string

const (
	DeleteAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppReplicationConfiguration DeleteAppReplicationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration"
)

type DeleteAppReplicationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAppReplicationConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAppReplicationConfigurationRequest struct {
	Headers DeleteAppReplicationConfigurationHeaders
	Request shared.DeleteAppReplicationConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteAppReplicationConfigurationResponse struct {
	ContentType                               string
	DeleteAppReplicationConfigurationResponse map[string]interface{}
	InternalError                             *interface{}
	InvalidParameterException                 *interface{}
	MissingRequiredParameterException         *interface{}
	OperationNotPermittedException            *interface{}
	StatusCode                                int64
	UnauthorizedOperationException            *interface{}
}
