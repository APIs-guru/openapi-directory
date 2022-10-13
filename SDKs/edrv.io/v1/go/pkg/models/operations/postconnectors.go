package operations

type PostConnectorsRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Format        *string `json:"format"`
	Power         *int64  `json:"power"`
	PowerType     *string `json:"power_type"`
	Rate          *string `json:"rate"`
	Type          *string `json:"type"`
}

type PostConnectorsRequest struct {
	Request PostConnectorsRequestBody `request:"mediaType=application/json"`
}

type PostConnectors200ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type PostConnectorsResponse struct {
	ContentType                            string
	StatusCode                             int64
	PostConnectors200ApplicationJSONObject *PostConnectors200ApplicationJSON
}
