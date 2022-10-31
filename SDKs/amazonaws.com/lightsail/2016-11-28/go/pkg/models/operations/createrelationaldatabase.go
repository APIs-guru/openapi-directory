package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRelationalDatabaseXAmzTargetEnum string

const (
	CreateRelationalDatabaseXAmzTargetEnumLightsail20161128CreateRelationalDatabase CreateRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.CreateRelationalDatabase"
)

type CreateRelationalDatabaseHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRelationalDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateRelationalDatabaseRequest struct {
	Headers CreateRelationalDatabaseHeaders
	Request shared.CreateRelationalDatabaseRequest `request:"mediaType=application/json"`
}

type CreateRelationalDatabaseResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateRelationalDatabaseResult  *shared.CreateRelationalDatabaseResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
