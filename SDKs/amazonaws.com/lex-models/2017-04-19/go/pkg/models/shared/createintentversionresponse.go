package shared

import (
	"time"
)

type CreateIntentVersionResponse struct {
	Checksum              *string              `json:"checksum"`
	ConclusionStatement   *Statement           `json:"conclusionStatement"`
	ConfirmationPrompt    *Prompt              `json:"confirmationPrompt"`
	CreatedDate           *time.Time           `json:"createdDate"`
	Description           *string              `json:"description"`
	DialogCodeHook        *CodeHook            `json:"dialogCodeHook"`
	FollowUpPrompt        *FollowUpPrompt      `json:"followUpPrompt"`
	FulfillmentActivity   *FulfillmentActivity `json:"fulfillmentActivity"`
	InputContexts         []InputContext       `json:"inputContexts"`
	KendraConfiguration   *KendraConfiguration `json:"kendraConfiguration"`
	LastUpdatedDate       *time.Time           `json:"lastUpdatedDate"`
	Name                  *string              `json:"name"`
	OutputContexts        []OutputContext      `json:"outputContexts"`
	ParentIntentSignature *string              `json:"parentIntentSignature"`
	RejectionStatement    *Statement           `json:"rejectionStatement"`
	SampleUtterances      []string             `json:"sampleUtterances"`
	Slots                 []Slot               `json:"slots"`
	Version               *string              `json:"version"`
}
