package operations

import (
	"openapi/pkg/models/shared"
)

type DisablePolicyTypeXAmzTargetEnum string

const (
	DisablePolicyTypeXAmzTargetEnumAwsOrganizationsV20161128DisablePolicyType DisablePolicyTypeXAmzTargetEnum = "AWSOrganizationsV20161128.DisablePolicyType"
)

type DisablePolicyTypeHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisablePolicyTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisablePolicyTypeRequest struct {
	Headers DisablePolicyTypeHeaders
	Request shared.DisablePolicyTypeRequest `request:"mediaType=application/json"`
}

type DisablePolicyTypeResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	DisablePolicyTypeResponse         *shared.DisablePolicyTypeResponse
	InvalidInputException             *interface{}
	PolicyChangesInProgressException  *interface{}
	PolicyTypeNotEnabledException     *interface{}
	RootNotFoundException             *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
