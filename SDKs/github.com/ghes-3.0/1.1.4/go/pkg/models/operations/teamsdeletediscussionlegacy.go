package operations

type TeamsDeleteDiscussionLegacyPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsDeleteDiscussionLegacyRequest struct {
	PathParams TeamsDeleteDiscussionLegacyPathParams
}

type TeamsDeleteDiscussionLegacyResponse struct {
	ContentType string
	StatusCode  int64
}
