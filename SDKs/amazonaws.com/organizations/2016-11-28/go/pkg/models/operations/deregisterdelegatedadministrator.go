package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterDelegatedAdministratorXAmzTargetEnum string

const (
	DeregisterDelegatedAdministratorXAmzTargetEnumAwsOrganizationsV20161128DeregisterDelegatedAdministrator DeregisterDelegatedAdministratorXAmzTargetEnum = "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator"
)

type DeregisterDelegatedAdministratorHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterDelegatedAdministratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterDelegatedAdministratorRequest struct {
	Headers DeregisterDelegatedAdministratorHeaders
	Request shared.DeregisterDelegatedAdministratorRequest `request:"mediaType=application/json"`
}

type DeregisterDelegatedAdministratorResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	AccountNotFoundException          *interface{}
	AccountNotRegisteredException     *interface{}
	ConcurrentModificationException   *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
