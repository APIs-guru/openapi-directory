package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRelationalDatabaseParametersXAmzTargetEnum string

const (
	UpdateRelationalDatabaseParametersXAmzTargetEnumLightsail20161128UpdateRelationalDatabaseParameters UpdateRelationalDatabaseParametersXAmzTargetEnum = "Lightsail_20161128.UpdateRelationalDatabaseParameters"
)

type UpdateRelationalDatabaseParametersHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRelationalDatabaseParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRelationalDatabaseParametersRequest struct {
	Headers UpdateRelationalDatabaseParametersHeaders
	Request shared.UpdateRelationalDatabaseParametersRequest `request:"mediaType=application/json"`
}

type UpdateRelationalDatabaseParametersResponse struct {
	AccessDeniedException                    *interface{}
	AccountSetupInProgressException          *interface{}
	ContentType                              string
	InvalidInputException                    *interface{}
	NotFoundException                        *interface{}
	OperationFailureException                *interface{}
	ServiceException                         *interface{}
	StatusCode                               int64
	UnauthenticatedException                 *interface{}
	UpdateRelationalDatabaseParametersResult *shared.UpdateRelationalDatabaseParametersResult
}
