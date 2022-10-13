package shared

type RegisterTargetWithMaintenanceWindowRequest struct {
	ClientToken      *string                           `json:"ClientToken"`
	Description      *string                           `json:"Description"`
	Name             *string                           `json:"Name"`
	OwnerInformation *string                           `json:"OwnerInformation"`
	ResourceType     MaintenanceWindowResourceTypeEnum `json:"ResourceType"`
	Targets          []Target                          `json:"Targets"`
	WindowID         string                            `json:"WindowId"`
}
