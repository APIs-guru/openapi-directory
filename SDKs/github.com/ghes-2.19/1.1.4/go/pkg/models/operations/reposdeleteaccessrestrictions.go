package operations

type ReposDeleteAccessRestrictionsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteAccessRestrictionsRequest struct {
	PathParams ReposDeleteAccessRestrictionsPathParams
}

type ReposDeleteAccessRestrictionsResponse struct {
	ContentType string
	StatusCode  int64
}
