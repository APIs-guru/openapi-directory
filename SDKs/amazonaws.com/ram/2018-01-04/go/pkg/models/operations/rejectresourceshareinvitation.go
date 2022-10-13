package operations

import (
	"openapi/pkg/models/shared"
)

type RejectResourceShareInvitationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RejectResourceShareInvitationRequestBody struct {
	ClientToken                *string `json:"clientToken"`
	ResourceShareInvitationArn string  `json:"resourceShareInvitationArn"`
}

type RejectResourceShareInvitationRequest struct {
	Headers RejectResourceShareInvitationHeaders
	Request RejectResourceShareInvitationRequestBody `request:"mediaType=application/json"`
}

type RejectResourceShareInvitationResponse struct {
	ContentType                                     string
	IdempotentParameterMismatchException            *interface{}
	InvalidClientTokenException                     *interface{}
	MalformedArnException                           *interface{}
	OperationNotPermittedException                  *interface{}
	RejectResourceShareInvitationResponse           *shared.RejectResourceShareInvitationResponse
	ResourceShareInvitationAlreadyAcceptedException *interface{}
	ResourceShareInvitationAlreadyRejectedException *interface{}
	ResourceShareInvitationArnNotFoundException     *interface{}
	ResourceShareInvitationExpiredException         *interface{}
	ServerInternalException                         *interface{}
	ServiceUnavailableException                     *interface{}
	StatusCode                                      int64
}
