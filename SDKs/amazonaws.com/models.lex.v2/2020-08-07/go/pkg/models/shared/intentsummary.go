package shared

import (
	"time"
)

type IntentSummary struct {
	Description           *string         `json:"description"`
	InputContexts         []InputContext  `json:"inputContexts"`
	IntentID              *string         `json:"intentId"`
	IntentName            *string         `json:"intentName"`
	LastUpdatedDateTime   *time.Time      `json:"lastUpdatedDateTime"`
	OutputContexts        []OutputContext `json:"outputContexts"`
	ParentIntentSignature *string         `json:"parentIntentSignature"`
}
