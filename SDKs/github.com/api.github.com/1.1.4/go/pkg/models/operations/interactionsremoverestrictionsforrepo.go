package operations

type InteractionsRemoveRestrictionsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type InteractionsRemoveRestrictionsForRepoRequest struct {
	PathParams InteractionsRemoveRestrictionsForRepoPathParams
}

type InteractionsRemoveRestrictionsForRepoResponse struct {
	ContentType string
	StatusCode  int64
}
