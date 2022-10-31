package operations

type InteractionsRemoveRestrictionsForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type InteractionsRemoveRestrictionsForOrgRequest struct {
	PathParams InteractionsRemoveRestrictionsForOrgPathParams
}

type InteractionsRemoveRestrictionsForOrgResponse struct {
	ContentType string
	StatusCode  int64
}
