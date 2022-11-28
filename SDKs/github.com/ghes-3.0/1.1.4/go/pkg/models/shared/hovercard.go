package shared

type HovercardContexts struct {
	Message string `json:"message"`
	Octicon string `json:"octicon"`
}

// Hovercard
// Hovercard
type Hovercard struct {
	Contexts []HovercardContexts `json:"contexts"`
}
