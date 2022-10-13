package operations

type TeamsDeleteDiscussionCommentInOrgPathParams struct {
	CommentNumber    int64  `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsDeleteDiscussionCommentInOrgRequest struct {
	PathParams TeamsDeleteDiscussionCommentInOrgPathParams
}

type TeamsDeleteDiscussionCommentInOrgResponse struct {
	ContentType string
	StatusCode  int64
}
