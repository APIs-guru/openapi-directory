package operations

type QuoteDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type QuoteDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type QuoteDeleteRequest struct {
	PathParams  QuoteDeletePathParams
	QueryParams QuoteDeleteQueryParams
}

type QuoteDeleteResponse struct {
	ContentType                         string
	QuoteDelete200ApplicationJSONObject map[string]interface{}
	StatusCode                          int64
}
