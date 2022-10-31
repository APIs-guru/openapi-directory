package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptHandshakeXAmzTargetEnum string

const (
	AcceptHandshakeXAmzTargetEnumAwsOrganizationsV20161128AcceptHandshake AcceptHandshakeXAmzTargetEnum = "AWSOrganizationsV20161128.AcceptHandshake"
)

type AcceptHandshakeHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptHandshakeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AcceptHandshakeRequest struct {
	Headers AcceptHandshakeHeaders
	Request shared.AcceptHandshakeRequest `request:"mediaType=application/json"`
}

type AcceptHandshakeResponse struct {
	AwsOrganizationsNotInUseException     *interface{}
	AcceptHandshakeResponse               *shared.AcceptHandshakeResponse
	AccessDeniedException                 *interface{}
	AccessDeniedForDependencyException    *interface{}
	ConcurrentModificationException       *interface{}
	ContentType                           string
	HandshakeAlreadyInStateException      *interface{}
	HandshakeConstraintViolationException *interface{}
	HandshakeNotFoundException            *interface{}
	InvalidHandshakeTransitionException   *interface{}
	InvalidInputException                 *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
}
