package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeclineInvitationPathParams struct {
	InvitationID int64 `pathParam:"style=simple,explode=false,name=invitation_id"`
}

type ReposDeclineInvitationRequest struct {
	PathParams ReposDeclineInvitationPathParams
}

type ReposDeclineInvitationResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
