package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabasesXAmzTargetEnum string

const (
	GetRelationalDatabasesXAmzTargetEnumLightsail20161128GetRelationalDatabases GetRelationalDatabasesXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabases"
)

type GetRelationalDatabasesHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabasesRequest struct {
	Headers GetRelationalDatabasesHeaders
	Request shared.GetRelationalDatabasesRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabasesResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetRelationalDatabasesResult    *shared.GetRelationalDatabasesResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
