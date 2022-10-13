package operations

type ReserveRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Connector     *string `json:"connector"`
	Driver        *string `json:"driver"`
	EndDate       *string `json:"endDate"`
	Token         *string `json:"token"`
}

type ReserveRequest struct {
	Request ReserveRequestBody `request:"mediaType=application/json"`
}

type Reserve201ApplicationJSON struct {
	Command map[string]interface{} `json:"command"`
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
}

type ReserveResponse struct {
	ContentType                     string
	StatusCode                      int64
	Reserve201ApplicationJSONObject *Reserve201ApplicationJSON
}
