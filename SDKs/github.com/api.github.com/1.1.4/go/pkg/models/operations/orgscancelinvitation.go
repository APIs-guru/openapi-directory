package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsCancelInvitationPathParams struct {
	InvitationID int64  `pathParam:"style=simple,explode=false,name=invitation_id"`
	Org          string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsCancelInvitationRequest struct {
	PathParams OrgsCancelInvitationPathParams
}

type OrgsCancelInvitationResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
