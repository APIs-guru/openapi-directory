package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePolicyXAmzTargetEnum string

const (
	CreatePolicyXAmzTargetEnumAwsOrganizationsV20161128CreatePolicy CreatePolicyXAmzTargetEnum = "AWSOrganizationsV20161128.CreatePolicy"
)

type CreatePolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePolicyRequest struct {
	Headers CreatePolicyHeaders
	Request shared.CreatePolicyRequest `request:"mediaType=application/json"`
}

type CreatePolicyResponse struct {
	AwsOrganizationsNotInUseException              *interface{}
	AccessDeniedException                          *interface{}
	ConcurrentModificationException                *interface{}
	ConstraintViolationException                   *interface{}
	ContentType                                    string
	CreatePolicyResponse                           *shared.CreatePolicyResponse
	DuplicatePolicyException                       *interface{}
	InvalidInputException                          *interface{}
	MalformedPolicyDocumentException               *interface{}
	PolicyTypeNotAvailableForOrganizationException *interface{}
	ServiceException                               *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
	UnsupportedAPIEndpointException                *interface{}
}
