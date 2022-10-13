package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsGetMembershipForUserPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsGetMembershipForUserRequest struct {
	PathParams OrgsGetMembershipForUserPathParams
}

type OrgsGetMembershipForUserResponse struct {
	ContentType   string
	StatusCode    int64
	BasicError    *shared.BasicError
	OrgMembership *shared.OrgMembership
}
