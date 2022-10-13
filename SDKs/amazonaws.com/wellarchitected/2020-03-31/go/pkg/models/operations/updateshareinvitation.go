package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateShareInvitationPathParams struct {
	ShareInvitationID string `pathParam:"style=simple,explode=false,name=ShareInvitationId"`
}

type UpdateShareInvitationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateShareInvitationRequestBodyShareInvitationActionEnum string

const (
	UpdateShareInvitationRequestBodyShareInvitationActionEnumAccept UpdateShareInvitationRequestBodyShareInvitationActionEnum = "ACCEPT"
	UpdateShareInvitationRequestBodyShareInvitationActionEnumReject UpdateShareInvitationRequestBodyShareInvitationActionEnum = "REJECT"
)

type UpdateShareInvitationRequestBody struct {
	ShareInvitationAction UpdateShareInvitationRequestBodyShareInvitationActionEnum `json:"ShareInvitationAction"`
}

type UpdateShareInvitationRequest struct {
	PathParams UpdateShareInvitationPathParams
	Headers    UpdateShareInvitationHeaders
	Request    UpdateShareInvitationRequestBody `request:"mediaType=application/json"`
}

type UpdateShareInvitationResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateShareInvitationOutput *shared.UpdateShareInvitationOutput
	ValidationException         *interface{}
}
