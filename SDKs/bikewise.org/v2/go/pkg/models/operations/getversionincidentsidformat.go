package operations

type GetVersionIncidentsIDFormatPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetVersionIncidentsIDFormatRequest struct {
	PathParams GetVersionIncidentsIDFormatPathParams
}

type GetVersionIncidentsIDFormatResponse struct {
	ContentType string
	StatusCode  int64
}
