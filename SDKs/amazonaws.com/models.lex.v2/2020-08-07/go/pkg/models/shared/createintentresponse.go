package shared

import (
	"time"
)

type CreateIntentResponse struct {
	BotID                     *string                      `json:"botId"`
	BotVersion                *string                      `json:"botVersion"`
	CreationDateTime          *time.Time                   `json:"creationDateTime"`
	Description               *string                      `json:"description"`
	DialogCodeHook            *DialogCodeHookSettings      `json:"dialogCodeHook"`
	FulfillmentCodeHook       *FulfillmentCodeHookSettings `json:"fulfillmentCodeHook"`
	InputContexts             []InputContext               `json:"inputContexts"`
	IntentClosingSetting      *IntentClosingSetting        `json:"intentClosingSetting"`
	IntentConfirmationSetting *IntentConfirmationSetting   `json:"intentConfirmationSetting"`
	IntentID                  *string                      `json:"intentId"`
	IntentName                *string                      `json:"intentName"`
	KendraConfiguration       *KendraConfiguration         `json:"kendraConfiguration"`
	LocaleID                  *string                      `json:"localeId"`
	OutputContexts            []OutputContext              `json:"outputContexts"`
	ParentIntentSignature     *string                      `json:"parentIntentSignature"`
	SampleUtterances          []SampleUtterance            `json:"sampleUtterances"`
}
