package shared

type WebhookRequestFilters struct {
	Action          *string  `json:"action"`
	Fields          []string `json:"fields"`
	ResourceSubtype *string  `json:"resource_subtype"`
	ResourceType    *string  `json:"resource_type"`
}

type WebhookRequest struct {
	Filters  []WebhookRequestFilters `json:"filters"`
	Resource string                  `json:"resource"`
	Target   string                  `json:"target"`
}
