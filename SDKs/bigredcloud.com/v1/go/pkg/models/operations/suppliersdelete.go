package operations

type SuppliersDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SuppliersDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type SuppliersDeleteRequest struct {
	PathParams  SuppliersDeletePathParams
	QueryParams SuppliersDeleteQueryParams
}

type SuppliersDeleteResponse struct {
	ContentType                             string
	StatusCode                              int64
	SuppliersDelete200ApplicationJSONObject map[string]interface{}
}
