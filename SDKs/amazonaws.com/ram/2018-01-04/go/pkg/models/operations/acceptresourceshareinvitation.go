package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptResourceShareInvitationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AcceptResourceShareInvitationRequestBody struct {
	ClientToken                *string `json:"clientToken"`
	ResourceShareInvitationArn string  `json:"resourceShareInvitationArn"`
}

type AcceptResourceShareInvitationRequest struct {
	Headers AcceptResourceShareInvitationHeaders
	Request AcceptResourceShareInvitationRequestBody `request:"mediaType=application/json"`
}

type AcceptResourceShareInvitationResponse struct {
	AcceptResourceShareInvitationResponse           *shared.AcceptResourceShareInvitationResponse
	ContentType                                     string
	IdempotentParameterMismatchException            *interface{}
	InvalidClientTokenException                     *interface{}
	MalformedArnException                           *interface{}
	OperationNotPermittedException                  *interface{}
	ResourceShareInvitationAlreadyAcceptedException *interface{}
	ResourceShareInvitationAlreadyRejectedException *interface{}
	ResourceShareInvitationArnNotFoundException     *interface{}
	ResourceShareInvitationExpiredException         *interface{}
	ServerInternalException                         *interface{}
	ServiceUnavailableException                     *interface{}
	StatusCode                                      int64
}
