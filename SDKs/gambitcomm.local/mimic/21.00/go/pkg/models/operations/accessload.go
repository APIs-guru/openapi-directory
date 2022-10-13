package operations

type AccessLoadPathParams struct {
	Filename string `pathParam:"style=simple,explode=false,name=filename"`
}

type AccessLoadRequest struct {
	PathParams AccessLoadPathParams
}

type AccessLoadResponse struct {
	ContentType                         string
	StatusCode                          int64
	AccessLoad200ApplicationJSONStrings []string
}
