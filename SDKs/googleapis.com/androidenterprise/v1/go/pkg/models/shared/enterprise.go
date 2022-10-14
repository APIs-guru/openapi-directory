package shared

type Enterprise struct {
	Administrator []Administrator `json:"administrator,omitempty"`
	ID            *string         `json:"id,omitempty"`
	Name          *string         `json:"name,omitempty"`
	PrimaryDomain *string         `json:"primaryDomain,omitempty"`
}
