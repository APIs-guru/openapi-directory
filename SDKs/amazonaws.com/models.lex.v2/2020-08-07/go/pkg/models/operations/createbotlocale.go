package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotLocalePathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
}

type CreateBotLocaleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBotLocaleRequestBodyVoiceSettings struct {
	VoiceID *string `json:"voiceId,omitempty"`
}

type CreateBotLocaleRequestBody struct {
	Description                  *string                                  `json:"description,omitempty"`
	LocaleID                     string                                   `json:"localeId"`
	NluIntentConfidenceThreshold float64                                  `json:"nluIntentConfidenceThreshold"`
	VoiceSettings                *CreateBotLocaleRequestBodyVoiceSettings `json:"voiceSettings,omitempty"`
}

type CreateBotLocaleRequest struct {
	PathParams CreateBotLocalePathParams
	Headers    CreateBotLocaleHeaders
	Request    CreateBotLocaleRequestBody `request:"mediaType=application/json"`
}

type CreateBotLocaleResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateBotLocaleResponse       *shared.CreateBotLocaleResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
