package shared

type FulfillmentActivity struct {
	CodeHook *CodeHook                   `json:"codeHook"`
	Type     FulfillmentActivityTypeEnum `json:"type"`
}
