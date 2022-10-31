package operations

import (
	"openapi/pkg/models/shared"
)

type InviteAccountToOrganizationXAmzTargetEnum string

const (
	InviteAccountToOrganizationXAmzTargetEnumAwsOrganizationsV20161128InviteAccountToOrganization InviteAccountToOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.InviteAccountToOrganization"
)

type InviteAccountToOrganizationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        InviteAccountToOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type InviteAccountToOrganizationRequest struct {
	Headers InviteAccountToOrganizationHeaders
	Request shared.InviteAccountToOrganizationRequest `request:"mediaType=application/json"`
}

type InviteAccountToOrganizationResponse struct {
	AwsOrganizationsNotInUseException     *interface{}
	AccessDeniedException                 *interface{}
	AccountOwnerNotVerifiedException      *interface{}
	ConcurrentModificationException       *interface{}
	ConstraintViolationException          *interface{}
	ContentType                           string
	DuplicateHandshakeException           *interface{}
	FinalizingOrganizationException       *interface{}
	HandshakeConstraintViolationException *interface{}
	InvalidInputException                 *interface{}
	InviteAccountToOrganizationResponse   *shared.InviteAccountToOrganizationResponse
	ServiceException                      *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
}
