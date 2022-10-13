package shared

type ErrorRootCauseEntity struct {
	Exceptions []RootCauseException `json:"Exceptions"`
	Name       *string              `json:"Name"`
	Remote     *bool                `json:"Remote"`
}
