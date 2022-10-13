package operations

import (
	"openapi/pkg/models/shared"
)

type MoveAccountXAmzTargetEnum string

const (
	MoveAccountXAmzTargetEnumAwsOrganizationsV20161128MoveAccount MoveAccountXAmzTargetEnum = "AWSOrganizationsV20161128.MoveAccount"
)

type MoveAccountHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MoveAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MoveAccountRequest struct {
	Headers MoveAccountHeaders
	Request shared.MoveAccountRequest `request:"mediaType=application/json"`
}

type MoveAccountResponse struct {
	AwsOrganizationsNotInUseException  *interface{}
	AccessDeniedException              *interface{}
	AccountNotFoundException           *interface{}
	ConcurrentModificationException    *interface{}
	ContentType                        string
	DestinationParentNotFoundException *interface{}
	DuplicateAccountException          *interface{}
	InvalidInputException              *interface{}
	ServiceException                   *interface{}
	SourceParentNotFoundException      *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
