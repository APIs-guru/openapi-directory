package operations

type QuittungTseQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type QuittungTseRequest struct {
	QueryParams QuittungTseQueryParams
}

type QuittungTse200ApplicationJSON struct {
	Data      *interface{} `json:"data"`
	Publickey *string      `json:"publickey"`
	Raw       *string      `json:"raw"`
	Signature *string      `json:"signature"`
}

type QuittungTseResponse struct {
	ContentType                         string
	StatusCode                          int64
	QuittungTse200ApplicationJSONObject *QuittungTse200ApplicationJSON
}
