package operations

type PutTIDBookmarkJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTIDBookmarkJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PutTIDBookmarkJSONRequest struct {
	PathParams PutTIDBookmarkJSONPathParams
	Headers    PutTIDBookmarkJSONHeaders
}

type PutTIDBookmarkJSONResponse struct {
	ContentType string
	StatusCode  int64
}
