package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseLogStreamsXAmzTargetEnum string

const (
	GetRelationalDatabaseLogStreamsXAmzTargetEnumLightsail20161128GetRelationalDatabaseLogStreams GetRelationalDatabaseLogStreamsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseLogStreams"
)

type GetRelationalDatabaseLogStreamsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseLogStreamsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseLogStreamsRequest struct {
	Headers GetRelationalDatabaseLogStreamsHeaders
	Request shared.GetRelationalDatabaseLogStreamsRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseLogStreamsResponse struct {
	AccessDeniedException                 *interface{}
	AccountSetupInProgressException       *interface{}
	ContentType                           string
	GetRelationalDatabaseLogStreamsResult *shared.GetRelationalDatabaseLogStreamsResult
	InvalidInputException                 *interface{}
	NotFoundException                     *interface{}
	OperationFailureException             *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	UnauthenticatedException              *interface{}
}
