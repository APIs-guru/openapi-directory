package operations

import (
	"openapi/pkg/models/shared"
)

type DeclineHandshakeXAmzTargetEnum string

const (
	DeclineHandshakeXAmzTargetEnumAwsOrganizationsV20161128DeclineHandshake DeclineHandshakeXAmzTargetEnum = "AWSOrganizationsV20161128.DeclineHandshake"
)

type DeclineHandshakeHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeclineHandshakeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeclineHandshakeRequest struct {
	Headers DeclineHandshakeHeaders
	Request shared.DeclineHandshakeRequest `request:"mediaType=application/json"`
}

type DeclineHandshakeResponse struct {
	AccessDeniedException               *interface{}
	ConcurrentModificationException     *interface{}
	ContentType                         string
	DeclineHandshakeResponse            *shared.DeclineHandshakeResponse
	HandshakeAlreadyInStateException    *interface{}
	HandshakeNotFoundException          *interface{}
	InvalidHandshakeTransitionException *interface{}
	InvalidInputException               *interface{}
	ServiceException                    *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
