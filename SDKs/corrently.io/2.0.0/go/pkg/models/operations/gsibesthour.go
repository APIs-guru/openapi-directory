package operations

type GsiBesthourQueryParams struct {
	Hours     *int64  `queryParam:"style=form,explode=true,name=hours"`
	Key       *string `queryParam:"style=form,explode=true,name=key"`
	Timeframe *int64  `queryParam:"style=form,explode=true,name=timeframe"`
	Zip       *string `queryParam:"style=form,explode=true,name=zip"`
}

type GsiBesthourRequest struct {
	QueryParams GsiBesthourQueryParams
}

type GsiBesthourResponse struct {
	ContentType                          string
	StatusCode                           int64
	GsiBesthour200ApplicationJSONBoolean *bool
}
