package shared

// ErrorRootCauseService
// A collection of fields identifying the services in a trace summary error.
type ErrorRootCauseService struct {
	AccountID  *string                `json:"AccountId,omitempty"`
	EntityPath []ErrorRootCauseEntity `json:"EntityPath,omitempty"`
	Inferred   *bool                  `json:"Inferred,omitempty"`
	Name       *string                `json:"Name,omitempty"`
	Names      []string               `json:"Names,omitempty"`
	Type       *string                `json:"Type,omitempty"`
}
