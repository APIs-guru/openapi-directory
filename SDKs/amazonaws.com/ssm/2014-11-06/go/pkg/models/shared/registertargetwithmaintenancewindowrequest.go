package shared



type RegisterTargetWithMaintenanceWindowRequest struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    OwnerInformation *string `json:"OwnerInformation,omitempty"`
    ResourceType MaintenanceWindowResourceTypeEnum `json:"ResourceType"`
    Targets []Target `json:"Targets"`
    WindowID string `json:"WindowId"`
    
}

