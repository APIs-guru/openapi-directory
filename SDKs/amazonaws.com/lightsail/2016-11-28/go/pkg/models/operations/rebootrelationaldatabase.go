package operations

import (
	"openapi/pkg/models/shared"
)

type RebootRelationalDatabaseXAmzTargetEnum string

const (
	RebootRelationalDatabaseXAmzTargetEnumLightsail20161128RebootRelationalDatabase RebootRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.RebootRelationalDatabase"
)

type RebootRelationalDatabaseHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RebootRelationalDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RebootRelationalDatabaseRequest struct {
	Headers RebootRelationalDatabaseHeaders
	Request shared.RebootRelationalDatabaseRequest `request:"mediaType=application/json"`
}

type RebootRelationalDatabaseResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	RebootRelationalDatabaseResult  *shared.RebootRelationalDatabaseResult
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
