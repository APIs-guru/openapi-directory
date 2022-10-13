package shared

type MaintenanceWindowTarget struct {
	Description      *string                            `json:"Description"`
	Name             *string                            `json:"Name"`
	OwnerInformation *string                            `json:"OwnerInformation"`
	ResourceType     *MaintenanceWindowResourceTypeEnum `json:"ResourceType"`
	Targets          []Target                           `json:"Targets"`
	WindowID         *string                            `json:"WindowId"`
	WindowTargetID   *string                            `json:"WindowTargetId"`
}
