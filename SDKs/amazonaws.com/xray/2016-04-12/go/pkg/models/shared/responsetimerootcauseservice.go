package shared

type ResponseTimeRootCauseService struct {
	AccountID  *string                       `json:"AccountId"`
	EntityPath []ResponseTimeRootCauseEntity `json:"EntityPath"`
	Inferred   *bool                         `json:"Inferred"`
	Name       *string                       `json:"Name"`
	Names      []string                      `json:"Names"`
	Type       *string                       `json:"Type"`
}
