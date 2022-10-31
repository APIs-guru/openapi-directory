package shared



type GetRateBasedRuleManagedKeysResponse struct {
    ManagedKeys []string `json:"ManagedKeys,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

