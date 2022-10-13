package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccountXAmzTargetEnum string

const (
	CreateAccountXAmzTargetEnumAwsOrganizationsV20161128CreateAccount CreateAccountXAmzTargetEnum = "AWSOrganizationsV20161128.CreateAccount"
)

type CreateAccountHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAccountRequest struct {
	Headers CreateAccountHeaders
	Request shared.CreateAccountRequest `request:"mediaType=application/json"`
}

type CreateAccountResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	CreateAccountResponse             *shared.CreateAccountResponse
	FinalizingOrganizationException   *interface{}
	InvalidInputException             *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
