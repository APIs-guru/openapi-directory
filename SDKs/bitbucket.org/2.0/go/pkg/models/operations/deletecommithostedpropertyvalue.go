package operations

type DeleteCommitHostedPropertyValuePathParams struct {
	AppKey       string `pathParam:"style=simple,explode=false,name=app_key"`
	Commit       string `pathParam:"style=simple,explode=false,name=commit"`
	PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteCommitHostedPropertyValueRequest struct {
	PathParams DeleteCommitHostedPropertyValuePathParams
}

type DeleteCommitHostedPropertyValueResponse struct {
	ContentType string
	StatusCode  int64
}
