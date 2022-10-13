package shared

type ErrorRootCauseService struct {
	AccountID  *string                `json:"AccountId"`
	EntityPath []ErrorRootCauseEntity `json:"EntityPath"`
	Inferred   *bool                  `json:"Inferred"`
	Name       *string                `json:"Name"`
	Names      []string               `json:"Names"`
	Type       *string                `json:"Type"`
}
