package shared



type RoleAssignment struct {
    AssignedTo *string `json:"assignedTo,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    OrgUnitID *string `json:"orgUnitId,omitempty"`
    RoleAssignmentID *string `json:"roleAssignmentId,omitempty"`
    RoleID *string `json:"roleId,omitempty"`
    ScopeType *string `json:"scopeType,omitempty"`
    
}

