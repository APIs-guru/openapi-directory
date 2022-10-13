package operations

import (
	"openapi/pkg/models/shared"
)

type PutBotPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutBotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutBotRequestBodyAbortStatement struct {
	Messages     []shared.Message `json:"messages"`
	ResponseCard *string          `json:"responseCard"`
}

type PutBotRequestBodyClarificationPrompt struct {
	MaxAttempts  *int64           `json:"maxAttempts"`
	Messages     []shared.Message `json:"messages"`
	ResponseCard *string          `json:"responseCard"`
}

type PutBotRequestBodyLocaleEnum string

const (
	PutBotRequestBodyLocaleEnumDeDe  PutBotRequestBodyLocaleEnum = "de-DE"
	PutBotRequestBodyLocaleEnumEnAu  PutBotRequestBodyLocaleEnum = "en-AU"
	PutBotRequestBodyLocaleEnumEnGb  PutBotRequestBodyLocaleEnum = "en-GB"
	PutBotRequestBodyLocaleEnumEnIn  PutBotRequestBodyLocaleEnum = "en-IN"
	PutBotRequestBodyLocaleEnumEnUs  PutBotRequestBodyLocaleEnum = "en-US"
	PutBotRequestBodyLocaleEnumEs419 PutBotRequestBodyLocaleEnum = "es-419"
	PutBotRequestBodyLocaleEnumEsEs  PutBotRequestBodyLocaleEnum = "es-ES"
	PutBotRequestBodyLocaleEnumEsUs  PutBotRequestBodyLocaleEnum = "es-US"
	PutBotRequestBodyLocaleEnumFrFr  PutBotRequestBodyLocaleEnum = "fr-FR"
	PutBotRequestBodyLocaleEnumFrCa  PutBotRequestBodyLocaleEnum = "fr-CA"
	PutBotRequestBodyLocaleEnumItIt  PutBotRequestBodyLocaleEnum = "it-IT"
	PutBotRequestBodyLocaleEnumJaJp  PutBotRequestBodyLocaleEnum = "ja-JP"
	PutBotRequestBodyLocaleEnumKoKr  PutBotRequestBodyLocaleEnum = "ko-KR"
)

type PutBotRequestBodyProcessBehaviorEnum string

const (
	PutBotRequestBodyProcessBehaviorEnumSave  PutBotRequestBodyProcessBehaviorEnum = "SAVE"
	PutBotRequestBodyProcessBehaviorEnumBuild PutBotRequestBodyProcessBehaviorEnum = "BUILD"
)

type PutBotRequestBody struct {
	AbortStatement               *PutBotRequestBodyAbortStatement      `json:"abortStatement"`
	Checksum                     *string                               `json:"checksum"`
	ChildDirected                bool                                  `json:"childDirected"`
	ClarificationPrompt          *PutBotRequestBodyClarificationPrompt `json:"clarificationPrompt"`
	CreateVersion                *bool                                 `json:"createVersion"`
	Description                  *string                               `json:"description"`
	DetectSentiment              *bool                                 `json:"detectSentiment"`
	EnableModelImprovements      *bool                                 `json:"enableModelImprovements"`
	IdleSessionTTLInSeconds      *int64                                `json:"idleSessionTTLInSeconds"`
	Intents                      []shared.Intent                       `json:"intents"`
	Locale                       PutBotRequestBodyLocaleEnum           `json:"locale"`
	NluIntentConfidenceThreshold *float64                              `json:"nluIntentConfidenceThreshold"`
	ProcessBehavior              *PutBotRequestBodyProcessBehaviorEnum `json:"processBehavior"`
	Tags                         []shared.Tag                          `json:"tags"`
	VoiceID                      *string                               `json:"voiceId"`
}

type PutBotRequest struct {
	PathParams PutBotPathParams
	Headers    PutBotHeaders
	Request    PutBotRequestBody `request:"mediaType=application/json"`
}

type PutBotResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	PreconditionFailedException *interface{}
	PutBotResponse              *shared.PutBotResponse
	StatusCode                  int64
}
