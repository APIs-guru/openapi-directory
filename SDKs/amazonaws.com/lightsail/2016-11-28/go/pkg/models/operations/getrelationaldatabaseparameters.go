package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseParametersXAmzTargetEnum string

const (
	GetRelationalDatabaseParametersXAmzTargetEnumLightsail20161128GetRelationalDatabaseParameters GetRelationalDatabaseParametersXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseParameters"
)

type GetRelationalDatabaseParametersHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseParametersRequest struct {
	Headers GetRelationalDatabaseParametersHeaders
	Request shared.GetRelationalDatabaseParametersRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseParametersResponse struct {
	AccessDeniedException                 *interface{}
	AccountSetupInProgressException       *interface{}
	ContentType                           string
	GetRelationalDatabaseParametersResult *shared.GetRelationalDatabaseParametersResult
	InvalidInputException                 *interface{}
	NotFoundException                     *interface{}
	OperationFailureException             *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	UnauthenticatedException              *interface{}
}
