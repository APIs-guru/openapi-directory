package shared



type ModifySelfservicePermissionsRequest struct {
    ResourceID string `json:"ResourceId"`
    SelfservicePermissions SelfservicePermissions `json:"SelfservicePermissions"`
    
}

