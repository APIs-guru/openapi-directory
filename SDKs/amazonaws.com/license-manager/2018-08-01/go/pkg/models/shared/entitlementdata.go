package shared

type EntitlementData struct {
	Name  string                  `json:"Name"`
	Unit  EntitlementDataUnitEnum `json:"Unit"`
	Value *string                 `json:"Value,omitempty"`
}
