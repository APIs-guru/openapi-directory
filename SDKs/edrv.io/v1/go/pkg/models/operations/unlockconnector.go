package operations

type UnlockconnectorRequestBody struct {
	Chargestation *string `json:"chargestation,omitempty"`
	Connector     *string `json:"connector,omitempty"`
}

type Unlockconnector201ApplicationJSON struct {
	Command map[string]interface{} `json:"command,omitempty"`
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
}

type UnlockconnectorRequest struct {
	Request UnlockconnectorRequestBody `request:"mediaType=application/json"`
}

type UnlockconnectorResponse struct {
	ContentType                             string
	StatusCode                              int64
	Unlockconnector201ApplicationJSONObject *Unlockconnector201ApplicationJSON
}
