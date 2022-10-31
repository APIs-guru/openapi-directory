package shared

type ProfileRef struct {
	AccountID             *string `json:"accountId,omitempty"`
	Href                  *string `json:"href,omitempty"`
	ID                    *string `json:"id,omitempty"`
	InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
	Kind                  *string `json:"kind,omitempty"`
	Name                  *string `json:"name,omitempty"`
	WebPropertyID         *string `json:"webPropertyId,omitempty"`
}
