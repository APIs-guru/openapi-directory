package operations

type PostConfigurationsRequestBody struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type PostConfigurationsRequest struct {
	Request PostConfigurationsRequestBody `request:"mediaType=application/json"`
}

type PostConfigurations201ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type PostConfigurationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PostConfigurations201ApplicationJSONObject *PostConfigurations201ApplicationJSON
}
