package operations

type PostConfigurationsRequestBody struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type PostConfigurationsRequest struct {
	Request PostConfigurationsRequestBody `request:"mediaType=application/json"`
}

type PostConfigurations201ApplicationJSON struct {
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
	Result  map[string]interface{} `json:"result,omitempty"`
}

type PostConfigurationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PostConfigurations201ApplicationJSONObject *PostConfigurations201ApplicationJSON
}
