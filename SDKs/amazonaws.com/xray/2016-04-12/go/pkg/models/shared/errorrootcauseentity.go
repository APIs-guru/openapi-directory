package shared

type ErrorRootCauseEntity struct {
	Exceptions []RootCauseException `json:"Exceptions,omitempty"`
	Name       *string              `json:"Name,omitempty"`
	Remote     *bool                `json:"Remote,omitempty"`
}
