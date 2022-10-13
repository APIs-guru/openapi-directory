package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAccountFromOrganizationXAmzTargetEnum string

const (
	RemoveAccountFromOrganizationXAmzTargetEnumAwsOrganizationsV20161128RemoveAccountFromOrganization RemoveAccountFromOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.RemoveAccountFromOrganization"
)

type RemoveAccountFromOrganizationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveAccountFromOrganizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveAccountFromOrganizationRequest struct {
	Headers RemoveAccountFromOrganizationHeaders
	Request shared.RemoveAccountFromOrganizationRequest `request:"mediaType=application/json"`
}

type RemoveAccountFromOrganizationResponse struct {
	AwsOrganizationsNotInUseException      *interface{}
	AccessDeniedException                  *interface{}
	AccountNotFoundException               *interface{}
	ConcurrentModificationException        *interface{}
	ConstraintViolationException           *interface{}
	ContentType                            string
	InvalidInputException                  *interface{}
	MasterCannotLeaveOrganizationException *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
