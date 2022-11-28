package shared

// EntitlementUsage
// Usage associated with an entitlement resource.
type EntitlementUsage struct {
	ConsumedValue string                  `json:"ConsumedValue"`
	MaxCount      *string                 `json:"MaxCount,omitempty"`
	Name          string                  `json:"Name"`
	Unit          EntitlementDataUnitEnum `json:"Unit"`
}
