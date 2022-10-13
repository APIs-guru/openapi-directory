package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateChangeSetXAmzTargetEnum string

const (
	GenerateChangeSetXAmzTargetEnumAwsServerMigrationServiceV20161024GenerateChangeSet GenerateChangeSetXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GenerateChangeSet"
)

type GenerateChangeSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateChangeSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GenerateChangeSetRequest struct {
	Headers GenerateChangeSetHeaders
	Request shared.GenerateChangeSetRequest `request:"mediaType=application/json"`
}

type GenerateChangeSetResponse struct {
	ContentType                       string
	GenerateChangeSetResponse         *shared.GenerateChangeSetResponse
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
