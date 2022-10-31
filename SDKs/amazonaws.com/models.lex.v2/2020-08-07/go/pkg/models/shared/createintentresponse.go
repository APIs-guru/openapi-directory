package shared

import (
	"time"
)

type CreateIntentResponse struct {
	BotID                     *string                      `json:"botId,omitempty"`
	BotVersion                *string                      `json:"botVersion,omitempty"`
	CreationDateTime          *time.Time                   `json:"creationDateTime,omitempty"`
	Description               *string                      `json:"description,omitempty"`
	DialogCodeHook            *DialogCodeHookSettings      `json:"dialogCodeHook,omitempty"`
	FulfillmentCodeHook       *FulfillmentCodeHookSettings `json:"fulfillmentCodeHook,omitempty"`
	InputContexts             []InputContext               `json:"inputContexts,omitempty"`
	IntentClosingSetting      *IntentClosingSetting        `json:"intentClosingSetting,omitempty"`
	IntentConfirmationSetting *IntentConfirmationSetting   `json:"intentConfirmationSetting,omitempty"`
	IntentID                  *string                      `json:"intentId,omitempty"`
	IntentName                *string                      `json:"intentName,omitempty"`
	KendraConfiguration       *KendraConfiguration         `json:"kendraConfiguration,omitempty"`
	LocaleID                  *string                      `json:"localeId,omitempty"`
	OutputContexts            []OutputContext              `json:"outputContexts,omitempty"`
	ParentIntentSignature     *string                      `json:"parentIntentSignature,omitempty"`
	SampleUtterances          []SampleUtterance            `json:"sampleUtterances,omitempty"`
}
