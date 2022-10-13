package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsSetMembershipForUserPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsSetMembershipForUserRequestBodyRoleEnum string

const (
	OrgsSetMembershipForUserRequestBodyRoleEnumAdmin  OrgsSetMembershipForUserRequestBodyRoleEnum = "admin"
	OrgsSetMembershipForUserRequestBodyRoleEnumMember OrgsSetMembershipForUserRequestBodyRoleEnum = "member"
)

type OrgsSetMembershipForUserRequestBody struct {
	Role *OrgsSetMembershipForUserRequestBodyRoleEnum `json:"role"`
}

type OrgsSetMembershipForUserRequest struct {
	PathParams OrgsSetMembershipForUserPathParams
	Request    *OrgsSetMembershipForUserRequestBody `request:"mediaType=application/json"`
}

type OrgsSetMembershipForUserResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	OrgMembership   *shared.OrgMembership
	ValidationError *shared.ValidationError
}
