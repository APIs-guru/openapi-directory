package operations

type TeamsRemoveMemberLegacyPathParams struct {
	TeamID   int64  `pathParam:"style=simple,explode=false,name=team_id"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsRemoveMemberLegacyRequest struct {
	PathParams TeamsRemoveMemberLegacyPathParams
}

type TeamsRemoveMemberLegacyResponse struct {
	ContentType string
	StatusCode  int64
}
