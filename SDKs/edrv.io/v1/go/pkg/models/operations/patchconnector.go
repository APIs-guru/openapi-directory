package operations

type PatchConnectorPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchConnectorRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Format        *string `json:"format"`
	Power         *int64  `json:"power"`
	PowerType     *string `json:"power_type"`
	Rate          *string `json:"rate"`
	Type          *string `json:"type"`
}

type PatchConnectorRequest struct {
	PathParams PatchConnectorPathParams
	Request    PatchConnectorRequestBody `request:"mediaType=application/json"`
}

type PatchConnector201ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type PatchConnectorResponse struct {
	ContentType                            string
	StatusCode                             int64
	PatchConnector201ApplicationJSONObject *PatchConnector201ApplicationJSON
}
