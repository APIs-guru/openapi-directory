package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListBlockedUsersPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListBlockedUsersRequest struct {
	PathParams OrgsListBlockedUsersPathParams
}

type OrgsListBlockedUsers415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type OrgsListBlockedUsersResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	OrgsListBlockedUsers415ApplicationJSONObject *OrgsListBlockedUsers415ApplicationJSON
	SimpleUsers                                  []shared.SimpleUser
}
