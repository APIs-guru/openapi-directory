package operations

import (
	"openapi/pkg/models/shared"
)

type StopRelationalDatabaseXAmzTargetEnum string

const (
	StopRelationalDatabaseXAmzTargetEnumLightsail20161128StopRelationalDatabase StopRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.StopRelationalDatabase"
)

type StopRelationalDatabaseHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopRelationalDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopRelationalDatabaseRequest struct {
	Headers StopRelationalDatabaseHeaders
	Request shared.StopRelationalDatabaseRequest `request:"mediaType=application/json"`
}

type StopRelationalDatabaseResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	StopRelationalDatabaseResult    *shared.StopRelationalDatabaseResult
	UnauthenticatedException        *interface{}
}
