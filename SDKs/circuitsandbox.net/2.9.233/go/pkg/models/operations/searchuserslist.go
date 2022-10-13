package operations

import (
	"openapi/pkg/models/shared"
)

type SearchUsersListQueryParams struct {
	Name               []string `queryParam:"style=form,explode=true,name=name"`
	ReturnFullUserInfo *bool    `queryParam:"style=form,explode=true,name=returnFullUserInfo"`
	SecondaryLookup    *bool    `queryParam:"style=form,explode=true,name=secondaryLookup"`
}

type SearchUsersListSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type SearchUsersListRequest struct {
	QueryParams SearchUsersListQueryParams
	Security    SearchUsersListSecurity
}

type SearchUsersListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Users       []interface{}
}
