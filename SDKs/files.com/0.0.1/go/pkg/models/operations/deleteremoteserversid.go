package operations

type DeleteRemoteServersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteRemoteServersIDRequest struct {
	PathParams DeleteRemoteServersIDPathParams
}

type DeleteRemoteServersIDResponse struct {
	ContentType string
	StatusCode  int64
}
