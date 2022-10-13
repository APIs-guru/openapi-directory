package shared

type ProfileSummary struct {
	ID      *string `json:"id"`
	Kind    *string `json:"kind"`
	Name    *string `json:"name"`
	Starred *bool   `json:"starred"`
	Type    *string `json:"type"`
}
