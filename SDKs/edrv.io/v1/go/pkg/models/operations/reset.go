package operations

type ResetRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Type          *string `json:"type"`
}

type ResetRequest struct {
	Request ResetRequestBody `request:"mediaType=application/json"`
}

type Reset201ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type ResetResponse struct {
	ContentType                   string
	StatusCode                    int64
	Reset201ApplicationJSONObject *Reset201ApplicationJSON
}
