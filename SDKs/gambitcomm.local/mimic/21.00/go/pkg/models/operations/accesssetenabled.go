package operations

type AccessSetEnabledPathParams struct {
	EnabledOrNot string `pathParam:"style=simple,explode=false,name=enabledOrNot"`
}

type AccessSetEnabledRequest struct {
	PathParams AccessSetEnabledPathParams
}

type AccessSetEnabledResponse struct {
	ContentType                              string
	StatusCode                               int64
	AccessSetEnabled200ApplicationJSONString *string
}
