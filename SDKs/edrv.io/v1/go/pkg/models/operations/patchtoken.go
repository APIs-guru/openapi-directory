package operations

type PatchTokenPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchTokenRequestBodyChannelEnum string

const (
	PatchTokenRequestBodyChannelEnumPhysical PatchTokenRequestBodyChannelEnum = "physical"
	PatchTokenRequestBodyChannelEnumSlack    PatchTokenRequestBodyChannelEnum = "slack"
	PatchTokenRequestBodyChannelEnumTelegram PatchTokenRequestBodyChannelEnum = "telegram"
	PatchTokenRequestBodyChannelEnumSms      PatchTokenRequestBodyChannelEnum = "sms"
)

type PatchTokenRequestBody struct {
	Active     *bool                             `json:"active"`
	Channel    *PatchTokenRequestBodyChannelEnum `json:"channel"`
	Driver     *string                           `json:"driver"`
	PhysicalID *string                           `json:"physicalId"`
	Type       *string                           `json:"type"`
}

type PatchTokenRequest struct {
	PathParams PatchTokenPathParams
	Request    PatchTokenRequestBody `request:"mediaType=application/json"`
}

type PatchToken201ApplicationJSON struct {
	Message *string       `json:"message"`
	Ok      *bool         `json:"ok"`
	Result  []interface{} `json:"result"`
}

type PatchTokenResponse struct {
	ContentType                        string
	StatusCode                         int64
	PatchToken201ApplicationJSONObject *PatchToken201ApplicationJSON
}
