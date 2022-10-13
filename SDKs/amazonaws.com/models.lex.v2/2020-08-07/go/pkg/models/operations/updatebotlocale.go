package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBotLocalePathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type UpdateBotLocaleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBotLocaleRequestBodyVoiceSettings struct {
	VoiceID *string `json:"voiceId"`
}

type UpdateBotLocaleRequestBody struct {
	Description                  *string                                  `json:"description"`
	NluIntentConfidenceThreshold float64                                  `json:"nluIntentConfidenceThreshold"`
	VoiceSettings                *UpdateBotLocaleRequestBodyVoiceSettings `json:"voiceSettings"`
}

type UpdateBotLocaleRequest struct {
	PathParams UpdateBotLocalePathParams
	Headers    UpdateBotLocaleHeaders
	Request    UpdateBotLocaleRequestBody `request:"mediaType=application/json"`
}

type UpdateBotLocaleResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateBotLocaleResponse       *shared.UpdateBotLocaleResponse
	ValidationException           *interface{}
}
