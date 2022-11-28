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
	Type       *string                          `json:"type,omitempty"`
}

type PostTokens201ApplicationJSON struct {
	Message *string       `json:"message,omitempty"`
	Ok      *bool         `json:"ok,omitempty"`
	Result  []interface{} `json:"result,omitempty"`
}

type PostTokensRequest struct {
	Request PostTokensRequestBody `request:"mediaType=application/json"`
}

type PostTokensResponse struct {
	ContentType                        string
	StatusCode                         int64
	PostTokens201ApplicationJSONObject *PostTokens201ApplicationJSON
}
