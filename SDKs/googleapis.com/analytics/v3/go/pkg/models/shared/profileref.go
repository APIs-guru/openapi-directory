package shared

type ProfileRef struct {
	AccountID             *string `json:"accountId"`
	Href                  *string `json:"href"`
	ID                    *string `json:"id"`
	InternalWebPropertyID *string `json:"internalWebPropertyId"`
	Kind                  *string `json:"kind"`
	Name                  *string `json:"name"`
	WebPropertyID         *string `json:"webPropertyId"`
}
