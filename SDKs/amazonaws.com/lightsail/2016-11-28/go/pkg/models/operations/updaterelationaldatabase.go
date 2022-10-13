package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRelationalDatabaseXAmzTargetEnum string

const (
	UpdateRelationalDatabaseXAmzTargetEnumLightsail20161128UpdateRelationalDatabase UpdateRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.UpdateRelationalDatabase"
)

type UpdateRelationalDatabaseHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRelationalDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRelationalDatabaseRequest struct {
	Headers UpdateRelationalDatabaseHeaders
	Request shared.UpdateRelationalDatabaseRequest `request:"mediaType=application/json"`
}

type UpdateRelationalDatabaseResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
	UpdateRelationalDatabaseResult  *shared.UpdateRelationalDatabaseResult
}
