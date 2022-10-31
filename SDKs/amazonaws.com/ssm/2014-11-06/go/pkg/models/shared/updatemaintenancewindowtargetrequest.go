package shared

type UpdateMaintenanceWindowTargetRequest struct {
	Description      *string  `json:"Description,omitempty"`
	Name             *string  `json:"Name,omitempty"`
	OwnerInformation *string  `json:"OwnerInformation,omitempty"`
	Replace          *bool    `json:"Replace,omitempty"`
	Targets          []Target `json:"Targets,omitempty"`
	WindowID         string   `json:"WindowId"`
	WindowTargetID   string   `json:"WindowTargetId"`
}
