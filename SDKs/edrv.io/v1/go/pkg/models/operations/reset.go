package operations

type ResetRequestBody struct {
	Chargestation *string `json:"chargestation,omitempty"`
	Type          *string `json:"type,omitempty"`
}

type ResetRequest struct {
	Request ResetRequestBody `request:"mediaType=application/json"`
}

type Reset201ApplicationJSON struct {
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
	Result  map[string]interface{} `json:"result,omitempty"`
}

type ResetResponse struct {
	ContentType                   string
	StatusCode                    int64
	Reset201ApplicationJSONObject *Reset201ApplicationJSON
}
