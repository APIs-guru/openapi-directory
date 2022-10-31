package shared



type WorkloadShare struct {
    PermissionType *PermissionTypeEnum `json:"PermissionType,omitempty"`
    ShareID *string `json:"ShareId,omitempty"`
    SharedBy *string `json:"SharedBy,omitempty"`
    SharedWith *string `json:"SharedWith,omitempty"`
    Status *ShareStatusEnum `json:"Status,omitempty"`
    WorkloadID *string `json:"WorkloadId,omitempty"`
    WorkloadName *string `json:"WorkloadName,omitempty"`
    
}

