package operations

type GetArrivalsByCrsPathParams struct {
	Crs string `pathParam:"style=simple,explode=false,name=CRS"`
}

type GetArrivalsByCrsQueryParams struct {
	APIKey         string  `queryParam:"style=form,explode=true,name=apiKey"`
	FilterStation  *string `queryParam:"style=form,explode=true,name=filterStation"`
	NumServices    *int64  `queryParam:"style=form,explode=true,name=numServices"`
	ServiceDetails *bool   `queryParam:"style=form,explode=true,name=serviceDetails"`
	TimeOffset     *int64  `queryParam:"style=form,explode=true,name=timeOffset"`
	TimeWindow     *int64  `queryParam:"style=form,explode=true,name=timeWindow"`
}

type GetArrivalsByCrsRequest struct {
	PathParams  GetArrivalsByCrsPathParams
	QueryParams GetArrivalsByCrsQueryParams
}

type GetArrivalsByCrsResponse struct {
	ContentType string
	StatusCode  int64
}
