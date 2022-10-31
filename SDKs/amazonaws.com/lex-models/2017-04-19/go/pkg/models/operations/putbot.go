package operations

import (
	"openapi/pkg/models/shared"
)

type PutBotPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutBotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutBotRequestBodyAbortStatement struct {
	Messages     []shared.Message `json:"messages,omitempty"`
	ResponseCard *string          `json:"responseCard,omitempty"`
}

type PutBotRequestBodyClarificationPrompt struct {
	MaxAttempts  *int64           `json:"maxAttempts,omitempty"`
	Messages     []shared.Message `json:"messages,omitempty"`
	ResponseCard *string          `json:"responseCard,omitempty"`
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
	AbortStatement               *PutBotRequestBodyAbortStatement      `json:"abortStatement,omitempty"`
	Checksum                     *string                               `json:"checksum,omitempty"`
	ChildDirected                bool                                  `json:"childDirected"`
	ClarificationPrompt          *PutBotRequestBodyClarificationPrompt `json:"clarificationPrompt,omitempty"`
	CreateVersion                *bool                                 `json:"createVersion,omitempty"`
	Description                  *string                               `json:"description,omitempty"`
	DetectSentiment              *bool                                 `json:"detectSentiment,omitempty"`
	EnableModelImprovements      *bool                                 `json:"enableModelImprovements,omitempty"`
	IdleSessionTTLInSeconds      *int64                                `json:"idleSessionTTLInSeconds,omitempty"`
	Intents                      []shared.Intent                       `json:"intents,omitempty"`
	Locale                       PutBotRequestBodyLocaleEnum           `json:"locale"`
	NluIntentConfidenceThreshold *float64                              `json:"nluIntentConfidenceThreshold,omitempty"`
	ProcessBehavior              *PutBotRequestBodyProcessBehaviorEnum `json:"processBehavior,omitempty"`
	Tags                         []shared.Tag                          `json:"tags,omitempty"`
	VoiceID                      *string                               `json:"voiceId,omitempty"`
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
