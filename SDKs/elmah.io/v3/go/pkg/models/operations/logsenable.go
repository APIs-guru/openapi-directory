package operations

type LogsEnablePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LogsEnableRequest struct {
	PathParams LogsEnablePathParams
}

type LogsEnableResponse struct {
	ContentType string
	StatusCode  int64
}
