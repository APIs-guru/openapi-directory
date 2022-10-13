package operations

import (
	"openapi/pkg/models/shared"
)

type StartRelationalDatabaseXAmzTargetEnum string

const (
	StartRelationalDatabaseXAmzTargetEnumLightsail20161128StartRelationalDatabase StartRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.StartRelationalDatabase"
)

type StartRelationalDatabaseHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartRelationalDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartRelationalDatabaseRequest struct {
	Headers StartRelationalDatabaseHeaders
	Request shared.StartRelationalDatabaseRequest `request:"mediaType=application/json"`
}

type StartRelationalDatabaseResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StartRelationalDatabaseResult   *shared.StartRelationalDatabaseResult
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
