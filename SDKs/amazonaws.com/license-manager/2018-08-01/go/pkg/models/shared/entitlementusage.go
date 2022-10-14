package shared

type EntitlementUsage struct {
	ConsumedValue string                  `json:"ConsumedValue"`
	MaxCount      *string                 `json:"MaxCount,omitempty"`
	Name          string                  `json:"Name"`
	Unit          EntitlementDataUnitEnum `json:"Unit"`
}
