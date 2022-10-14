package shared

type HashClientIDResponse struct {
	ClientID       *string `json:"clientId,omitempty"`
	HashedClientID *string `json:"hashedClientId,omitempty"`
	Kind           *string `json:"kind,omitempty"`
	WebPropertyID  *string `json:"webPropertyId,omitempty"`
}
