package shared

type VideoSessionOs struct {
	Name      *string `json:"name,omitempty"`
	Shortname *string `json:"shortname,omitempty"`
	Version   *string `json:"version,omitempty"`
}
