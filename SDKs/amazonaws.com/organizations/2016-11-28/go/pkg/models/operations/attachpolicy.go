package operations

import (
	"openapi/pkg/models/shared"
)

type AttachPolicyXAmzTargetEnum string

const (
	AttachPolicyXAmzTargetEnumAwsOrganizationsV20161128AttachPolicy AttachPolicyXAmzTargetEnum = "AWSOrganizationsV20161128.AttachPolicy"
)

type AttachPolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
