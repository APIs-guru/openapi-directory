package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseBundlesXAmzTargetEnum string

const (
	GetRelationalDatabaseBundlesXAmzTargetEnumLightsail20161128GetRelationalDatabaseBundles GetRelationalDatabaseBundlesXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseBundles"
)

type GetRelationalDatabaseBundlesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseBundlesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseBundlesRequest struct {
	Headers GetRelationalDatabaseBundlesHeaders
	Request shared.GetRelationalDatabaseBundlesRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseBundlesResponse struct {
	AccessDeniedException              *interface{}
	AccountSetupInProgressException    *interface{}
	ContentType                        string
	GetRelationalDatabaseBundlesResult *shared.GetRelationalDatabaseBundlesResult
	InvalidInputException              *interface{}
	NotFoundException                  *interface{}
	OperationFailureException          *interface{}
	ServiceException                   *interface{}
	StatusCode                         int64
	UnauthenticatedException           *interface{}
}
