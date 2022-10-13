package shared

type FaultRootCauseEntity struct {
	Exceptions []RootCauseException `json:"Exceptions"`
	Name       *string              `json:"Name"`
	Remote     *bool                `json:"Remote"`
}
