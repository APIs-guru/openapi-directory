package operations

type PostTokensRequestBodyChannelEnum string

const (
	PostTokensRequestBodyChannelEnumPhysical PostTokensRequestBodyChannelEnum = "physical"
	PostTokensRequestBodyChannelEnumSlack    PostTokensRequestBodyChannelEnum = "slack"
	PostTokensRequestBodyChannelEnumTelegram PostTokensRequestBodyChannelEnum = "telegram"
	PostTokensRequestBodyChannelEnumSms      PostTokensRequestBodyChannelEnum = "sms"
)

type PostTokensRequestBody struct {
	Active     bool                             `json:"active"`
	Channel    PostTokensRequestBodyChannelEnum `json:"channel"`
	Driver     string                           `json:"driver"`
	PhysicalID string                           `json:"physicalId"`
	Type       *string                          `json:"type"`
}

type PostTokensRequest struct {
	Request PostTokensRequestBody `request:"mediaType=application/json"`
}

type PostTokens201ApplicationJSON struct {
	Message *string       `json:"message"`
	Ok      *bool         `json:"ok"`
	Result  []interface{} `json:"result"`
}

type PostTokensResponse struct {
	ContentType                        string
	StatusCode                         int64
	PostTokens201ApplicationJSONObject *PostTokens201ApplicationJSON
}
