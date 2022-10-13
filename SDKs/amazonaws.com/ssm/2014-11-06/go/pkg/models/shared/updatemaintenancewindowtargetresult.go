package shared

type UpdateMaintenanceWindowTargetResult struct {
	Description      *string  `json:"Description"`
	Name             *string  `json:"Name"`
	OwnerInformation *string  `json:"OwnerInformation"`
	Targets          []Target `json:"Targets"`
	WindowID         *string  `json:"WindowId"`
	WindowTargetID   *string  `json:"WindowTargetId"`
}
