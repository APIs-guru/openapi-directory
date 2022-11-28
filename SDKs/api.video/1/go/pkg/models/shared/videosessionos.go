package shared

// VideoSessionOs
// The operating system the viewer is on.
type VideoSessionOs struct {
	Name      *string `json:"name,omitempty"`
	Shortname *string `json:"shortname,omitempty"`
	Version   *string `json:"version,omitempty"`
}
