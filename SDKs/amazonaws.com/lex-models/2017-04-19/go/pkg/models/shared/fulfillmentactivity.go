package shared

type FulfillmentActivity struct {
	CodeHook *CodeHook                   `json:"codeHook,omitempty"`
	Type     FulfillmentActivityTypeEnum `json:"type"`
}
