package shared

import (
	"time"
)

type CreateBotVersionResponse struct {
	AbortStatement          *Statement  `json:"abortStatement,omitempty"`
	Checksum                *string     `json:"checksum,omitempty"`
	ChildDirected           *bool       `json:"childDirected,omitempty"`
	ClarificationPrompt     *Prompt     `json:"clarificationPrompt,omitempty"`
	CreatedDate             *time.Time  `json:"createdDate,omitempty"`
	Description             *string     `json:"description,omitempty"`
	DetectSentiment         *bool       `json:"detectSentiment,omitempty"`
	EnableModelImprovements *bool       `json:"enableModelImprovements,omitempty"`
	FailureReason           *string     `json:"failureReason,omitempty"`
	IdleSessionTTLInSeconds *int64      `json:"idleSessionTTLInSeconds,omitempty"`
	Intents                 []Intent    `json:"intents,omitempty"`
	LastUpdatedDate         *time.Time  `json:"lastUpdatedDate,omitempty"`
	Locale                  *LocaleEnum `json:"locale,omitempty"`
	Name                    *string     `json:"name,omitempty"`
	Status                  *StatusEnum `json:"status,omitempty"`
	Version                 *string     `json:"version,omitempty"`
	VoiceID                 *string     `json:"voiceId,omitempty"`
}
