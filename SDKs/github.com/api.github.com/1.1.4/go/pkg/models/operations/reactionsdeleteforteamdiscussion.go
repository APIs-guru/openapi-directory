package operations

type ReactionsDeleteForTeamDiscussionPathParams struct {
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	ReactionID       int64  `pathParam:"style=simple,explode=false,name=reaction_id"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsDeleteForTeamDiscussionRequest struct {
	PathParams ReactionsDeleteForTeamDiscussionPathParams
}

type ReactionsDeleteForTeamDiscussionResponse struct {
	ContentType string
	StatusCode  int64
}
