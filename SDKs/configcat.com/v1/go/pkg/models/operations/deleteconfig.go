package operations

type DeleteConfigPathParams struct {
	ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
}

type DeleteConfigRequest struct {
	PathParams DeleteConfigPathParams
}

type DeleteConfigResponse struct {
	ContentType string
	StatusCode  int64
}
