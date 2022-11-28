package shared

type WebhookSubscription struct {
	CreatedAt            *string  `json:"created_at,omitempty"`
	DownstreamEventTypes []string `json:"downstream_event_types,omitempty"`
	DownstreamID         *string  `json:"downstream_id,omitempty"`
	ExecuteURL           *string  `json:"execute_url,omitempty"`
	UnifyEventTypes      []string `json:"unify_event_types,omitempty"`
}
