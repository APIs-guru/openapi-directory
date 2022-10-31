package operations

type GetRawGenreGroupsPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetRawGenreGroupsRequest struct {
	PathParams GetRawGenreGroupsPathParams
}

type GetRawGenreGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Nitro       *interface{}
}
