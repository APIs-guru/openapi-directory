package operations

type QuittungZugferdQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type QuittungZugferdRequest struct {
	QueryParams QuittungZugferdQueryParams
}

type QuittungZugferdResponse struct {
	ContentType string
	StatusCode  int64
}
