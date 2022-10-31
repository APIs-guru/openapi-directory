package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotAliasPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type CreateBotAliasHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateBotAliasRequestBodyConversationLogSettings struct {
	AudioLogSettings []shared.AudioLogSetting `json:"audioLogSettings,omitempty"`
	TextLogSettings  []shared.TextLogSetting  `json:"textLogSettings,omitempty"`
}

type CreateBotAliasRequestBodySentimentAnalysisSettings struct {
	DetectSentiment *bool `json:"detectSentiment,omitempty"`
}

type CreateBotAliasRequestBody struct {
	BotAliasLocaleSettings    map[string]shared.BotAliasLocaleSettings            `json:"botAliasLocaleSettings,omitempty"`
	BotAliasName              string                                              `json:"botAliasName"`
	BotVersion                *string                                             `json:"botVersion,omitempty"`
	ConversationLogSettings   *CreateBotAliasRequestBodyConversationLogSettings   `json:"conversationLogSettings,omitempty"`
	Description               *string                                             `json:"description,omitempty"`
	SentimentAnalysisSettings *CreateBotAliasRequestBodySentimentAnalysisSettings `json:"sentimentAnalysisSettings,omitempty"`
	Tags                      map[string]string                                   `json:"tags,omitempty"`
}

type CreateBotAliasRequest struct {
	PathParams CreateBotAliasPathParams
	Headers    CreateBotAliasHeaders
	Request    CreateBotAliasRequestBody `request:"mediaType=application/json"`
}

type CreateBotAliasResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateBotAliasResponse        *shared.CreateBotAliasResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
