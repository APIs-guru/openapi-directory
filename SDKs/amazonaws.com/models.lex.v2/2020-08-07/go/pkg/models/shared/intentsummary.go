package shared

import (
	"time"
)

type IntentSummary struct {
	Description           *string         `json:"description,omitempty"`
	InputContexts         []InputContext  `json:"inputContexts,omitempty"`
	IntentID              *string         `json:"intentId,omitempty"`
	IntentName            *string         `json:"intentName,omitempty"`
	LastUpdatedDateTime   *time.Time      `json:"lastUpdatedDateTime,omitempty"`
	OutputContexts        []OutputContext `json:"outputContexts,omitempty"`
	ParentIntentSignature *string         `json:"parentIntentSignature,omitempty"`
}
