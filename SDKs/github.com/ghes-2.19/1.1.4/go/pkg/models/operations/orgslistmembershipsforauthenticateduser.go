package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListMembershipsForAuthenticatedUserStateEnum string

const (
	OrgsListMembershipsForAuthenticatedUserStateEnumActive  OrgsListMembershipsForAuthenticatedUserStateEnum = "active"
	OrgsListMembershipsForAuthenticatedUserStateEnumPending OrgsListMembershipsForAuthenticatedUserStateEnum = "pending"
)

type OrgsListMembershipsForAuthenticatedUserQueryParams struct {
	Page    *int64                                            `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                            `queryParam:"style=form,explode=true,name=per_page"`
	State   *OrgsListMembershipsForAuthenticatedUserStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type OrgsListMembershipsForAuthenticatedUserRequest struct {
	QueryParams OrgsListMembershipsForAuthenticatedUserQueryParams
}

type OrgsListMembershipsForAuthenticatedUserResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	OrgMemberships  []shared.OrgMembership
	ValidationError *shared.ValidationError
}
