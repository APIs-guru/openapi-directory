package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBotAliasPathParams struct {
	BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
}

type UpdateBotAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBotAliasRequestBodyConversationLogSettings struct {
	AudioLogSettings []shared.AudioLogSetting `json:"audioLogSettings,omitempty"`
	TextLogSettings  []shared.TextLogSetting  `json:"textLogSettings,omitempty"`
}

type UpdateBotAliasRequestBodySentimentAnalysisSettings struct {
	DetectSentiment *bool `json:"detectSentiment,omitempty"`
}

type UpdateBotAliasRequestBody struct {
	BotAliasLocaleSettings    map[string]shared.BotAliasLocaleSettings            `json:"botAliasLocaleSettings,omitempty"`
	BotAliasName              string                                              `json:"botAliasName"`
	BotVersion                *string                                             `json:"botVersion,omitempty"`
	ConversationLogSettings   *UpdateBotAliasRequestBodyConversationLogSettings   `json:"conversationLogSettings,omitempty"`
	Description               *string                                             `json:"description,omitempty"`
	SentimentAnalysisSettings *UpdateBotAliasRequestBodySentimentAnalysisSettings `json:"sentimentAnalysisSettings,omitempty"`
}

type UpdateBotAliasRequest struct {
	PathParams UpdateBotAliasPathParams
	Headers    UpdateBotAliasHeaders
	Request    UpdateBotAliasRequestBody `request:"mediaType=application/json"`
}

type UpdateBotAliasResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateBotAliasResponse        *shared.UpdateBotAliasResponse
	ValidationException           *interface{}
}
