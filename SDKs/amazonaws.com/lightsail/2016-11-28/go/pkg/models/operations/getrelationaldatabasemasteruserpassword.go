package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum string

const (
	GetRelationalDatabaseMasterUserPasswordXAmzTargetEnumLightsail20161128GetRelationalDatabaseMasterUserPassword GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword"
)

type GetRelationalDatabaseMasterUserPasswordHeaders struct {
	XAmzAlgorithm     *string                                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetRelationalDatabaseMasterUserPasswordRequest struct {
	Headers GetRelationalDatabaseMasterUserPasswordHeaders
	Request shared.GetRelationalDatabaseMasterUserPasswordRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseMasterUserPasswordResponse struct {
	AccessDeniedException                         *interface{}
	AccountSetupInProgressException               *interface{}
	ContentType                                   string
	GetRelationalDatabaseMasterUserPasswordResult *shared.GetRelationalDatabaseMasterUserPasswordResult
	InvalidInputException                         *interface{}
	NotFoundException                             *interface{}
	OperationFailureException                     *interface{}
	ServiceException                              *interface{}
	StatusCode                                    int64
	UnauthenticatedException                      *interface{}
}
