package shared

type FaultRootCauseService struct {
	AccountID  *string                `json:"AccountId"`
	EntityPath []FaultRootCauseEntity `json:"EntityPath"`
	Inferred   *bool                  `json:"Inferred"`
	Name       *string                `json:"Name"`
	Names      []string               `json:"Names"`
	Type       *string                `json:"Type"`
}
