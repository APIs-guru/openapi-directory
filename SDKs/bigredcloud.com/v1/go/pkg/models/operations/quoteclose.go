package operations

type QuoteClosePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type QuoteCloseRequest struct {
	PathParams QuoteClosePathParams
}

type QuoteCloseResponse struct {
	ContentType                        string
	QuoteClose200ApplicationJSONObject map[string]interface{}
	StatusCode                         int64
}
