package shared



type FaultRootCauseService struct {
    AccountID *string `json:"AccountId,omitempty"`
    EntityPath []FaultRootCauseEntity `json:"EntityPath,omitempty"`
    Inferred *bool `json:"Inferred,omitempty"`
    Name *string `json:"Name,omitempty"`
    Names []string `json:"Names,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

