package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsAddMemberLegacyPathParams struct {
	TeamID   int64  `pathParam:"style=simple,explode=false,name=team_id"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsAddMemberLegacyRequest struct {
	PathParams TeamsAddMemberLegacyPathParams
}

type TeamsAddMemberLegacy422ApplicationJSONErrors struct {
	Code     *string `json:"code"`
	Field    *string `json:"field"`
	Resource *string `json:"resource"`
}

type TeamsAddMemberLegacy422ApplicationJSON struct {
	DocumentationURL *string                                        `json:"documentation_url"`
	Errors           []TeamsAddMemberLegacy422ApplicationJSONErrors `json:"errors"`
	Message          *string                                        `json:"message"`
}

type TeamsAddMemberLegacyResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BasicError                                   *shared.BasicError
	TeamsAddMemberLegacy422ApplicationJSONObject *TeamsAddMemberLegacy422ApplicationJSON
}
