package operations

type PurchasesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PurchasesDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type PurchasesDeleteRequest struct {
	PathParams  PurchasesDeletePathParams
	QueryParams PurchasesDeleteQueryParams
}

type PurchasesDeleteResponse struct {
	ContentType                             string
	PurchasesDelete200ApplicationJSONObject map[string]interface{}
	StatusCode                              int64
}
