package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsUpdateMembershipForAuthenticatedUserPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum string

const (
	OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnumActive OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum = "active"
)

type OrgsUpdateMembershipForAuthenticatedUserRequestBody struct {
	State OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum `json:"state"`
}

type OrgsUpdateMembershipForAuthenticatedUserRequest struct {
	PathParams OrgsUpdateMembershipForAuthenticatedUserPathParams
	Request    *OrgsUpdateMembershipForAuthenticatedUserRequestBody `request:"mediaType=application/json"`
}

type OrgsUpdateMembershipForAuthenticatedUserResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	OrgMembership   *shared.OrgMembership
	ValidationError *shared.ValidationError
}
