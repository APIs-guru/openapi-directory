package shared



type ItvEntitlementsHistory struct {
    Cancellations []ItvEntitlementCancelation `json:"cancellations"`
    Entitlements []ItvEntitlement `json:"entitlements"`
    
}

