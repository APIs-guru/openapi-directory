package shared

// ResponseTimeRootCauseService
// A collection of fields identifying the service in a response time warning.
type ResponseTimeRootCauseService struct {
	AccountID  *string                       `json:"AccountId,omitempty"`
	EntityPath []ResponseTimeRootCauseEntity `json:"EntityPath,omitempty"`
	Inferred   *bool                         `json:"Inferred,omitempty"`
	Name       *string                       `json:"Name,omitempty"`
	Names      []string                      `json:"Names,omitempty"`
	Type       *string                       `json:"Type,omitempty"`
}
