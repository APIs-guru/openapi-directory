package operations

type GetServiceDetailsByIDPathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceID"`
}

type GetServiceDetailsByIDQueryParams struct {
	APIKey string `queryParam:"style=form,explode=true,name=apiKey"`
}

type GetServiceDetailsByIDRequest struct {
	PathParams  GetServiceDetailsByIDPathParams
	QueryParams GetServiceDetailsByIDQueryParams
}

type GetServiceDetailsByIDResponse struct {
	ContentType string
	StatusCode  int64
}
