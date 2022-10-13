package operations

type QuittungTsEsignatureQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type QuittungTsEsignatureRequest struct {
	QueryParams QuittungTsEsignatureQueryParams
}

type QuittungTsEsignatureResponse struct {
	ContentType string
	StatusCode  int64
}
