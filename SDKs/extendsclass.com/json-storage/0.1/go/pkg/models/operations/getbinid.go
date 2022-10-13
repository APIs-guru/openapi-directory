package operations

type GetBinIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBinIDRequest struct {
	PathParams GetBinIDPathParams
}

type GetBinIDResponse struct {
	ContentType                      string
	Error                            *interface{}
	GetBinID200ApplicationJSONObject map[string]interface{}
	StatusCode                       int64
}
