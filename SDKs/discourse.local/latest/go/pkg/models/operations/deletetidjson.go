package operations

type DeleteTIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteTIDJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type DeleteTIDJSONRequest struct {
	PathParams DeleteTIDJSONPathParams
	Headers    DeleteTIDJSONHeaders
}

type DeleteTIDJSONResponse struct {
	ContentType string
	StatusCode  int64
}
