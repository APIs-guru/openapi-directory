package shared

type AutomotivePartsCompatibilityPolicy struct {
	CategoryID                    *string  `json:"categoryId"`
	CategoryTreeID                *string  `json:"categoryTreeId"`
	CompatibilityBasedOn          *string  `json:"compatibilityBasedOn"`
	CompatibleVehicleTypes        []string `json:"compatibleVehicleTypes"`
	MaxNumberOfCompatibleVehicles *int32   `json:"maxNumberOfCompatibleVehicles"`
}
