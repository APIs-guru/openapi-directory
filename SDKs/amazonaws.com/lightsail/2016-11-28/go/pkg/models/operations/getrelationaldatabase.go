package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseXAmzTargetEnum string

const (
	GetRelationalDatabaseXAmzTargetEnumLightsail20161128GetRelationalDatabase GetRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabase"
)

type GetRelationalDatabaseHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseRequest struct {
	Headers GetRelationalDatabaseHeaders
	Request shared.GetRelationalDatabaseRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetRelationalDatabaseResult     *shared.GetRelationalDatabaseResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
