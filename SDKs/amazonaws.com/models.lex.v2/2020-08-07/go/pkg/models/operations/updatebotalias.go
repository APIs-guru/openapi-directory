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
	AudioLogSettings []shared.AudioLogSetting `json:"audioLogSettings"`
	TextLogSettings  []shared.TextLogSetting  `json:"textLogSettings"`
}

type UpdateBotAliasRequestBodySentimentAnalysisSettings struct {
	DetectSentiment *bool `json:"detectSentiment"`
}

type UpdateBotAliasRequestBody struct {
	BotAliasLocaleSettings    map[string]shared.BotAliasLocaleSettings            `json:"botAliasLocaleSettings"`
	BotAliasName              string                                              `json:"botAliasName"`
	BotVersion                *string                                             `json:"botVersion"`
	ConversationLogSettings   *UpdateBotAliasRequestBodyConversationLogSettings   `json:"conversationLogSettings"`
	Description               *string                                             `json:"description"`
	SentimentAnalysisSettings *UpdateBotAliasRequestBodySentimentAnalysisSettings `json:"sentimentAnalysisSettings"`
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
