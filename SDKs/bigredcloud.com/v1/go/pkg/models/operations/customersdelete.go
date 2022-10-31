package operations

type CustomersDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CustomersDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type CustomersDeleteRequest struct {
	PathParams  CustomersDeletePathParams
	QueryParams CustomersDeleteQueryParams
}

type CustomersDeleteResponse struct {
	ContentType                             string
	CustomersDelete200ApplicationJSONObject map[string]interface{}
	StatusCode                              int64
}
