package operations

type GetPullRequestHostedPropertyValuePathParams struct {
	AppKey        string `pathParam:"style=simple,explode=false,name=app_key"`
	PropertyName  string `pathParam:"style=simple,explode=false,name=property_name"`
	PullrequestID string `pathParam:"style=simple,explode=false,name=pullrequest_id"`
	RepoSlug      string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace     string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetPullRequestHostedPropertyValueRequest struct {
	PathParams GetPullRequestHostedPropertyValuePathParams
}

type GetPullRequestHostedPropertyValueResponse struct {
	ContentType string
	StatusCode  int64
}
