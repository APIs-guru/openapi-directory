package shared

type URLChannel struct {
	ID         *string `json:"id,omitempty"`
	Kind       *string `json:"kind,omitempty"`
	URLPattern *string `json:"urlPattern,omitempty"`
}
