package operations

type SalesEntriesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SalesEntriesDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type SalesEntriesDeleteRequest struct {
	PathParams  SalesEntriesDeletePathParams
	QueryParams SalesEntriesDeleteQueryParams
}

type SalesEntriesDeleteResponse struct {
	ContentType                                string
	SalesEntriesDelete200ApplicationJSONObject map[string]interface{}
	StatusCode                                 int64
}
