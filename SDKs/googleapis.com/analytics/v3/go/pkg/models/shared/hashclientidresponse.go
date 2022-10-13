package shared

type HashClientIDResponse struct {
	ClientID       *string `json:"clientId"`
	HashedClientID *string `json:"hashedClientId"`
	Kind           *string `json:"kind"`
	WebPropertyID  *string `json:"webPropertyId"`
}
