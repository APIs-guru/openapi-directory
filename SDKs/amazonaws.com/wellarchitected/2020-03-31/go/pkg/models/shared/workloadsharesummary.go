package shared

type WorkloadShareSummary struct {
	PermissionType *PermissionTypeEnum `json:"PermissionType,omitempty"`
	ShareID        *string             `json:"ShareId,omitempty"`
	SharedWith     *string             `json:"SharedWith,omitempty"`
	Status         *ShareStatusEnum    `json:"Status,omitempty"`
}
