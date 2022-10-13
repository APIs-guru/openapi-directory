package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseEventsXAmzTargetEnum string

const (
	GetRelationalDatabaseEventsXAmzTargetEnumLightsail20161128GetRelationalDatabaseEvents GetRelationalDatabaseEventsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseEvents"
)

type GetRelationalDatabaseEventsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseEventsRequest struct {
	Headers GetRelationalDatabaseEventsHeaders
	Request shared.GetRelationalDatabaseEventsRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseEventsResponse struct {
	AccessDeniedException             *interface{}
	AccountSetupInProgressException   *interface{}
	ContentType                       string
	GetRelationalDatabaseEventsResult *shared.GetRelationalDatabaseEventsResult
	InvalidInputException             *interface{}
	NotFoundException                 *interface{}
	OperationFailureException         *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	UnauthenticatedException          *interface{}
}
