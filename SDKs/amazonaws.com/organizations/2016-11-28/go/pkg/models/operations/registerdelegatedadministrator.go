package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterDelegatedAdministratorXAmzTargetEnum string

const (
	RegisterDelegatedAdministratorXAmzTargetEnumAwsOrganizationsV20161128RegisterDelegatedAdministrator RegisterDelegatedAdministratorXAmzTargetEnum = "AWSOrganizationsV20161128.RegisterDelegatedAdministrator"
)

type RegisterDelegatedAdministratorHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterDelegatedAdministratorXAmzTargetEnum `header:"name=X-Amz-Target"`
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
