package shared

type AccountSummary struct {
	ID            *string              `json:"id"`
	Kind          *string              `json:"kind"`
	Name          *string              `json:"name"`
	Starred       *bool                `json:"starred"`
	WebProperties []WebPropertySummary `json:"webProperties"`
}
