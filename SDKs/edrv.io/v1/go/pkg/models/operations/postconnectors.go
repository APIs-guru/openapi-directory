package operations

type PostConnectorsRequestBody struct {
	Chargestation *string `json:"chargestation,omitempty"`
	Format        *string `json:"format,omitempty"`
	Power         *int64  `json:"power,omitempty"`
	PowerType     *string `json:"power_type,omitempty"`
	Rate          *string `json:"rate,omitempty"`
	Type          *string `json:"type,omitempty"`
}

type PostConnectorsRequest struct {
	Request PostConnectorsRequestBody `request:"mediaType=application/json"`
}

type PostConnectors200ApplicationJSON struct {
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
	Result  map[string]interface{} `json:"result,omitempty"`
}

type PostConnectorsResponse struct {
	ContentType                            string
	StatusCode                             int64
	PostConnectors200ApplicationJSONObject *PostConnectors200ApplicationJSON
}
