package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseLogEventsXAmzTargetEnum string

const (
	GetRelationalDatabaseLogEventsXAmzTargetEnumLightsail20161128GetRelationalDatabaseLogEvents GetRelationalDatabaseLogEventsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseLogEvents"
)

type GetRelationalDatabaseLogEventsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseLogEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseLogEventsRequest struct {
	Headers GetRelationalDatabaseLogEventsHeaders
	Request shared.GetRelationalDatabaseLogEventsRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseLogEventsResponse struct {
	AccessDeniedException                *interface{}
	AccountSetupInProgressException      *interface{}
	ContentType                          string
	GetRelationalDatabaseLogEventsResult *shared.GetRelationalDatabaseLogEventsResult
	InvalidInputException                *interface{}
	NotFoundException                    *interface{}
	OperationFailureException            *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	UnauthenticatedException             *interface{}
}
