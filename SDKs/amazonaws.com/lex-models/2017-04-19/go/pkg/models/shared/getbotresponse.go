package shared

import (
	"time"
)

type GetBotResponse struct {
	AbortStatement               *Statement  `json:"abortStatement"`
	Checksum                     *string     `json:"checksum"`
	ChildDirected                *bool       `json:"childDirected"`
	ClarificationPrompt          *Prompt     `json:"clarificationPrompt"`
	CreatedDate                  *time.Time  `json:"createdDate"`
	Description                  *string     `json:"description"`
	DetectSentiment              *bool       `json:"detectSentiment"`
	EnableModelImprovements      *bool       `json:"enableModelImprovements"`
	FailureReason                *string     `json:"failureReason"`
	IdleSessionTTLInSeconds      *int64      `json:"idleSessionTTLInSeconds"`
	Intents                      []Intent    `json:"intents"`
	LastUpdatedDate              *time.Time  `json:"lastUpdatedDate"`
	Locale                       *LocaleEnum `json:"locale"`
	Name                         *string     `json:"name"`
	NluIntentConfidenceThreshold *float64    `json:"nluIntentConfidenceThreshold"`
	Status                       *StatusEnum `json:"status"`
	Version                      *string     `json:"version"`
	VoiceID                      *string     `json:"voiceId"`
}
