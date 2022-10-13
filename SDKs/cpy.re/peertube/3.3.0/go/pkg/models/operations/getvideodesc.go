package operations

type GetVideoDescPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type GetVideoDescRequest struct {
	PathParams GetVideoDescPathParams
}

type GetVideoDescResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetVideoDesc200ApplicationJSONString *string
}
