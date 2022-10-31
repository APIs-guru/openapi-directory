package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterDelegatedAdministratorXAmzTargetEnum string

const (
	RegisterDelegatedAdministratorXAmzTargetEnumAwsOrganizationsV20161128RegisterDelegatedAdministrator RegisterDelegatedAdministratorXAmzTargetEnum = "AWSOrganizationsV20161128.RegisterDelegatedAdministrator"
)

type RegisterDelegatedAdministratorHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterDelegatedAdministratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterDelegatedAdministratorRequest struct {
	Headers RegisterDelegatedAdministratorHeaders
	Request shared.RegisterDelegatedAdministratorRequest `request:"mediaType=application/json"`
}

type RegisterDelegatedAdministratorResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	AccountAlreadyRegisteredException *interface{}
	AccountNotFoundException          *interface{}
	ConcurrentModificationException   *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
