package shared



type DeregisterTargetFromMaintenanceWindowRequest struct {
    Safe *bool `json:"Safe,omitempty"`
    WindowID string `json:"WindowId"`
    WindowTargetID string `json:"WindowTargetId"`
    
}

