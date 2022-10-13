package shared

type Channel struct {
	Address     *string           `json:"address"`
	Expiration  *string           `json:"expiration"`
	ID          *string           `json:"id"`
	Kind        *string           `json:"kind"`
	Params      map[string]string `json:"params"`
	Payload     *bool             `json:"payload"`
	ResourceID  *string           `json:"resourceId"`
	ResourceURI *string           `json:"resourceUri"`
	Token       *string           `json:"token"`
	Type        *string           `json:"type"`
}
