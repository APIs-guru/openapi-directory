package shared

type AutomotivePartsCompatibilityPolicy struct {
	CategoryID                    *string  `json:"categoryId,omitempty"`
	CategoryTreeID                *string  `json:"categoryTreeId,omitempty"`
	CompatibilityBasedOn          *string  `json:"compatibilityBasedOn,omitempty"`
	CompatibleVehicleTypes        []string `json:"compatibleVehicleTypes,omitempty"`
	MaxNumberOfCompatibleVehicles *int32   `json:"maxNumberOfCompatibleVehicles,omitempty"`
}
