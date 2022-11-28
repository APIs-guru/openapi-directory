package operations

type MgetInfoPathParams struct {
	InfoArray []string `pathParam:"style=simple,explode=false,name=infoArray"`
}

type MgetInfoRequest struct {
	PathParams MgetInfoPathParams
}

type MgetInfoResponse struct {
	ContentType                       string
	StatusCode                        int64
	MgetInfo200ApplicationJSONObjects []map[string]interface{}
}
