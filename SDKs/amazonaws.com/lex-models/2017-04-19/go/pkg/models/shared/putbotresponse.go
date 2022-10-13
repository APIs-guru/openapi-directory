package shared

import (
	"time"
)

type PutBotResponse struct {
	AbortStatement               *Statement  `json:"abortStatement"`
	Checksum                     *string     `json:"checksum"`
	ChildDirected                *bool       `json:"childDirected"`
	ClarificationPrompt          *Prompt     `json:"clarificationPrompt"`
	CreateVersion                *bool       `json:"createVersion"`
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
	Tags                         []Tag       `json:"tags"`
	Version                      *string     `json:"version"`
	VoiceID                      *string     `json:"voiceId"`
}
