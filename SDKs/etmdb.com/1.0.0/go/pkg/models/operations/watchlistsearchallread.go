package operations

type WatchlistSearchallReadPathParams struct {
	Param string `pathParam:"style=simple,explode=false,name=param"`
}

type WatchlistSearchallReadRequest struct {
	PathParams WatchlistSearchallReadPathParams
}

type WatchlistSearchallReadResponse struct {
	ContentType string
	StatusCode  int64
}
