package shared

import (
	"time"
)

type PutIntentResponse struct {
	Checksum              *string              `json:"checksum,omitempty"`
	ConclusionStatement   *Statement           `json:"conclusionStatement,omitempty"`
	ConfirmationPrompt    *Prompt              `json:"confirmationPrompt,omitempty"`
	CreateVersion         *bool                `json:"createVersion,omitempty"`
	CreatedDate           *time.Time           `json:"createdDate,omitempty"`
	Description           *string              `json:"description,omitempty"`
	DialogCodeHook        *CodeHook            `json:"dialogCodeHook,omitempty"`
	FollowUpPrompt        *FollowUpPrompt      `json:"followUpPrompt,omitempty"`
	FulfillmentActivity   *FulfillmentActivity `json:"fulfillmentActivity,omitempty"`
	InputContexts         []InputContext       `json:"inputContexts,omitempty"`
	KendraConfiguration   *KendraConfiguration `json:"kendraConfiguration,omitempty"`
	LastUpdatedDate       *time.Time           `json:"lastUpdatedDate,omitempty"`
	Name                  *string              `json:"name,omitempty"`
	OutputContexts        []OutputContext      `json:"outputContexts,omitempty"`
	ParentIntentSignature *string              `json:"parentIntentSignature,omitempty"`
	RejectionStatement    *Statement           `json:"rejectionStatement,omitempty"`
	SampleUtterances      []string             `json:"sampleUtterances,omitempty"`
	Slots                 []Slot               `json:"slots,omitempty"`
	Version               *string              `json:"version,omitempty"`
}
