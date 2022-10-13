package operations

type QuittungTseDataQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type QuittungTseDataRequest struct {
	QueryParams QuittungTseDataQueryParams
}

type QuittungTseDataResponse struct {
	ContentType string
	StatusCode  int64
}
