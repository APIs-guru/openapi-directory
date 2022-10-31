package operations

import (
	"openapi/pkg/models/shared"
)

type DetachPolicyXAmzTargetEnum string

const (
	DetachPolicyXAmzTargetEnumAwsOrganizationsV20161128DetachPolicy DetachPolicyXAmzTargetEnum = "AWSOrganizationsV20161128.DetachPolicy"
)

type DetachPolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DetachPolicyRequest struct {
	Headers DetachPolicyHeaders
	Request shared.DetachPolicyRequest `request:"mediaType=application/json"`
}

type DetachPolicyResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	PolicyChangesInProgressException  *interface{}
	PolicyNotAttachedException        *interface{}
	PolicyNotFoundException           *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TargetNotFoundException           *interface{}
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
