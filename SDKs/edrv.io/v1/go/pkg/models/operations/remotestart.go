package operations

type RemotestartRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Connector     *string `json:"connector"`
	Driver        *string `json:"driver"`
	Token         *string `json:"token"`
}

type RemotestartRequest struct {
	Request RemotestartRequestBody `request:"mediaType=application/json"`
}

type Remotestart201ApplicationJSON struct {
	Command map[string]interface{} `json:"command"`
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
}

type RemotestartResponse struct {
	ContentType                         string
	StatusCode                          int64
	Remotestart201ApplicationJSONObject *Remotestart201ApplicationJSON
}
