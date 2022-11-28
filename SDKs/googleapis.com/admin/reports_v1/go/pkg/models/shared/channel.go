package shared

// Channel
// A notification channel used to watch for resource changes.
type Channel struct {
	Address     *string           `json:"address,omitempty"`
	Expiration  *string           `json:"expiration,omitempty"`
	ID          *string           `json:"id,omitempty"`
	Kind        *string           `json:"kind,omitempty"`
	Params      map[string]string `json:"params,omitempty"`
	Payload     *bool             `json:"payload,omitempty"`
	ResourceID  *string           `json:"resourceId,omitempty"`
	ResourceURI *string           `json:"resourceUri,omitempty"`
	Token       *string           `json:"token,omitempty"`
	Type        *string           `json:"type,omitempty"`
}
