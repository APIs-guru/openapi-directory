package shared

type HashClientIDRequest struct {
	ClientID      *string `json:"clientId"`
	Kind          *string `json:"kind"`
	WebPropertyID *string `json:"webPropertyId"`
}
