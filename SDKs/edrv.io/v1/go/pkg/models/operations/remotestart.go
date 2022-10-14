package operations

type RemotestartRequestBody struct {
	Chargestation *string `json:"chargestation,omitempty"`
	Connector     *string `json:"connector,omitempty"`
	Driver        *string `json:"driver,omitempty"`
	Token         *string `json:"token,omitempty"`
}

type RemotestartRequest struct {
	Request RemotestartRequestBody `request:"mediaType=application/json"`
}

type Remotestart201ApplicationJSON struct {
	Command map[string]interface{} `json:"command,omitempty"`
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
}

type RemotestartResponse struct {
	ContentType                         string
	StatusCode                          int64
	Remotestart201ApplicationJSONObject *Remotestart201ApplicationJSON
}
