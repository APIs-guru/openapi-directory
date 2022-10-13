package operations

import (
	"openapi/pkg/models/shared"
)

type AttachPolicyXAmzTargetEnum string

const (
	AttachPolicyXAmzTargetEnumAwsOrganizationsV20161128AttachPolicy AttachPolicyXAmzTargetEnum = "AWSOrganizationsV20161128.AttachPolicy"
)

type AttachPolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AttachPolicyRequest struct {
	Headers AttachPolicyHeaders
	Request shared.AttachPolicyRequest `request:"mediaType=application/json"`
}

type AttachPolicyResponse struct {
	AwsOrganizationsNotInUseException  *interface{}
	AccessDeniedException              *interface{}
	ConcurrentModificationException    *interface{}
	ConstraintViolationException       *interface{}
	ContentType                        string
	DuplicatePolicyAttachmentException *interface{}
	InvalidInputException              *interface{}
	PolicyChangesInProgressException   *interface{}
	PolicyNotFoundException            *interface{}
	PolicyTypeNotEnabledException      *interface{}
	ServiceException                   *interface{}
	StatusCode                         int64
	TargetNotFoundException            *interface{}
	TooManyRequestsException           *interface{}
	UnsupportedAPIEndpointException    *interface{}
}
