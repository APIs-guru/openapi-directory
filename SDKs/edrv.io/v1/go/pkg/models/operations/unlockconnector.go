package operations

type UnlockconnectorRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Connector     *string `json:"connector"`
}

type UnlockconnectorRequest struct {
	Request UnlockconnectorRequestBody `request:"mediaType=application/json"`
}

type Unlockconnector201ApplicationJSON struct {
	Command map[string]interface{} `json:"command"`
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
}

type UnlockconnectorResponse struct {
	ContentType                             string
	StatusCode                              int64
	Unlockconnector201ApplicationJSONObject *Unlockconnector201ApplicationJSON
}
