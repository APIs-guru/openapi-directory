package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePolicyXAmzTargetEnum string

const (
	DeletePolicyXAmzTargetEnumAwsOrganizationsV20161128DeletePolicy DeletePolicyXAmzTargetEnum = "AWSOrganizationsV20161128.DeletePolicy"
)

type DeletePolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePolicyRequest struct {
	Headers DeletePolicyHeaders
	Request shared.DeletePolicyRequest `request:"mediaType=application/json"`
}

type DeletePolicyResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	PolicyInUseException              *interface{}
	PolicyNotFoundException           *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
