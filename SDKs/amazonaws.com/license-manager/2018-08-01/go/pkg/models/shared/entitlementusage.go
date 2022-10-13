package shared

type EntitlementUsage struct {
	ConsumedValue string                  `json:"ConsumedValue"`
	MaxCount      *string                 `json:"MaxCount"`
	Name          string                  `json:"Name"`
	Unit          EntitlementDataUnitEnum `json:"Unit"`
}
