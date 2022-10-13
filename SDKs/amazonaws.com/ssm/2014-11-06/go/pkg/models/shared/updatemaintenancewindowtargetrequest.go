package shared

type UpdateMaintenanceWindowTargetRequest struct {
	Description      *string  `json:"Description"`
	Name             *string  `json:"Name"`
	OwnerInformation *string  `json:"OwnerInformation"`
	Replace          *bool    `json:"Replace"`
	Targets          []Target `json:"Targets"`
	WindowID         string   `json:"WindowId"`
	WindowTargetID   string   `json:"WindowTargetId"`
}
