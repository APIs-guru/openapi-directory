package shared



type ItvSubscriptionState struct {
    EffectiveEntitlements []ItvEntitlement `json:"effective_entitlements"`
    FailedAvailabilityChecks []string `json:"failed_availability_checks"`
    Purchased []string `json:"purchased"`
    Source string `json:"source"`
    
}

