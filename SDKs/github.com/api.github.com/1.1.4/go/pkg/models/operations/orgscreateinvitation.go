package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsCreateInvitationPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsCreateInvitationRequestBodyRoleEnum string

const (
	OrgsCreateInvitationRequestBodyRoleEnumAdmin          OrgsCreateInvitationRequestBodyRoleEnum = "admin"
	OrgsCreateInvitationRequestBodyRoleEnumDirectMember   OrgsCreateInvitationRequestBodyRoleEnum = "direct_member"
	OrgsCreateInvitationRequestBodyRoleEnumBillingManager OrgsCreateInvitationRequestBodyRoleEnum = "billing_manager"
)

type OrgsCreateInvitationRequestBody struct {
	Email     *string                                  `json:"email,omitempty"`
	InviteeID *int64                                   `json:"invitee_id,omitempty"`
	Role      *OrgsCreateInvitationRequestBodyRoleEnum `json:"role,omitempty"`
	TeamIds   []int64                                  `json:"team_ids,omitempty"`
}

type OrgsCreateInvitationRequest struct {
	PathParams OrgsCreateInvitationPathParams
	Request    *OrgsCreateInvitationRequestBody `request:"mediaType=application/json"`
}

type OrgsCreateInvitationResponse struct {
	ContentType            string
	StatusCode             int64
	BasicError             *shared.BasicError
	OrganizationInvitation *shared.OrganizationInvitation
	ValidationError        *shared.ValidationError
}
