package operations

type SalesCreditNotesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SalesCreditNotesDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type SalesCreditNotesDeleteRequest struct {
	PathParams  SalesCreditNotesDeletePathParams
	QueryParams SalesCreditNotesDeleteQueryParams
}

type SalesCreditNotesDeleteResponse struct {
	ContentType                                    string
	SalesCreditNotesDelete200ApplicationJSONObject map[string]interface{}
	StatusCode                                     int64
}
