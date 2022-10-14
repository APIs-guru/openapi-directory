package shared

type Principal struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}
