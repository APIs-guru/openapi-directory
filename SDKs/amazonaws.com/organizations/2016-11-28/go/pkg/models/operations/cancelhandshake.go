package operations

import (
	"openapi/pkg/models/shared"
)

type CancelHandshakeXAmzTargetEnum string

const (
	CancelHandshakeXAmzTargetEnumAwsOrganizationsV20161128CancelHandshake CancelHandshakeXAmzTargetEnum = "AWSOrganizationsV20161128.CancelHandshake"
)

type CancelHandshakeHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelHandshakeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelHandshakeRequest struct {
	Headers CancelHandshakeHeaders
	Request shared.CancelHandshakeRequest `request:"mediaType=application/json"`
}

type CancelHandshakeResponse struct {
	AccessDeniedException               *interface{}
	CancelHandshakeResponse             *shared.CancelHandshakeResponse
	ConcurrentModificationException     *interface{}
	ContentType                         string
	HandshakeAlreadyInStateException    *interface{}
	HandshakeNotFoundException          *interface{}
	InvalidHandshakeTransitionException *interface{}
	InvalidInputException               *interface{}
	ServiceException                    *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
