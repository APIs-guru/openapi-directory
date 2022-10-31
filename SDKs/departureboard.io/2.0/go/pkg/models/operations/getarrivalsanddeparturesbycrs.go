package operations

type GetArrivalsAndDeparturesByCrsPathParams struct {
	Crs string `pathParam:"style=simple,explode=false,name=CRS"`
}

type GetArrivalsAndDeparturesByCrsQueryParams struct {
	APIKey         string  `queryParam:"style=form,explode=true,name=apiKey"`
	FilterStation  *string `queryParam:"style=form,explode=true,name=filterStation"`
	FilterType     *string `queryParam:"style=form,explode=true,name=filterType"`
	NumServices    *int64  `queryParam:"style=form,explode=true,name=numServices"`
	ServiceDetails *bool   `queryParam:"style=form,explode=true,name=serviceDetails"`
	TimeOffset     *int64  `queryParam:"style=form,explode=true,name=timeOffset"`
	TimeWindow     *int64  `queryParam:"style=form,explode=true,name=timeWindow"`
}

type GetArrivalsAndDeparturesByCrsRequest struct {
	PathParams  GetArrivalsAndDeparturesByCrsPathParams
	QueryParams GetArrivalsAndDeparturesByCrsQueryParams
}

type GetArrivalsAndDeparturesByCrsResponse struct {
	ContentType string
	StatusCode  int64
}
