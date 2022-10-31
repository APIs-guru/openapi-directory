package operations

type ReactionsDeleteForIssuePathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	ReactionID  int64  `pathParam:"style=simple,explode=false,name=reaction_id"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsDeleteForIssueRequest struct {
	PathParams ReactionsDeleteForIssuePathParams
}

type ReactionsDeleteForIssueResponse struct {
	ContentType string
	StatusCode  int64
}
