package shared



type UpdateMaintenanceWindowTargetResult struct {
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    OwnerInformation *string `json:"OwnerInformation,omitempty"`
    Targets []Target `json:"Targets,omitempty"`
    WindowID *string `json:"WindowId,omitempty"`
    WindowTargetID *string `json:"WindowTargetId,omitempty"`
    
}

