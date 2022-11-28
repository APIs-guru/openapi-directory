package shared

// EntitlementData
// Data associated with an entitlement resource.
type EntitlementData struct {
	Name  string                  `json:"Name"`
	Unit  EntitlementDataUnitEnum `json:"Unit"`
	Value *string                 `json:"Value,omitempty"`
}
