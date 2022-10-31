package shared



type Entitlement struct {
    AllowCheckIn *bool `json:"AllowCheckIn,omitempty"`
    MaxCount *int64 `json:"MaxCount,omitempty"`
    Name string `json:"Name"`
    Overage *bool `json:"Overage,omitempty"`
    Unit EntitlementUnitEnum `json:"Unit"`
    Value *string `json:"Value,omitempty"`
    
}

