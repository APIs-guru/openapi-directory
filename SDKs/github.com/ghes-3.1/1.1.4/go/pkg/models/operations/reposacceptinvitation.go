package operations

import (
	"openapi/pkg/models/shared"
)

type ReposAcceptInvitationPathParams struct {
	InvitationID int64 `pathParam:"style=simple,explode=false,name=invitation_id"`
}

type ReposAcceptInvitationRequest struct {
	PathParams ReposAcceptInvitationPathParams
}

type ReposAcceptInvitationResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
