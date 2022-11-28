package operations

type DotGetGlobalAlertsQueryParams struct {
	Includestreaming *bool `queryParam:"style=form,explode=true,name=includestreaming"`
}

type DotGetGlobalAlertsRequest struct {
	QueryParams DotGetGlobalAlertsQueryParams
}

type DotGetGlobalAlertsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
