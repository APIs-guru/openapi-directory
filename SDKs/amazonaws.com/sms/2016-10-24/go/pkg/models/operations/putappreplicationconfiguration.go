package operations

import (
	"openapi/pkg/models/shared"
)

type PutAppReplicationConfigurationXAmzTargetEnum string

const (
	PutAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppReplicationConfiguration PutAppReplicationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration"
)

type PutAppReplicationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAppReplicationConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
