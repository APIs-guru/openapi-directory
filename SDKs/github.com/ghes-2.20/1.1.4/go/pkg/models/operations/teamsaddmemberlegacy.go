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

type TeamsAddMemberLegacyResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
