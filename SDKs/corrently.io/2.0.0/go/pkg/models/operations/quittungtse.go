package operations

type QuittungTseQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type QuittungTse200ApplicationJSON struct {
	Data      *interface{} `json:"data,omitempty"`
	Publickey *string      `json:"publickey,omitempty"`
	Raw       *string      `json:"raw,omitempty"`
	Signature *string      `json:"signature,omitempty"`
}

type QuittungTseRequest struct {
	QueryParams QuittungTseQueryParams
}

type QuittungTseResponse struct {
	ContentType                         string
	StatusCode                          int64
	QuittungTse200ApplicationJSONObject *QuittungTse200ApplicationJSON
}
