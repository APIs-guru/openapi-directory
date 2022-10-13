package shared

type WorkloadShareSummary struct {
	PermissionType *PermissionTypeEnum `json:"PermissionType"`
	ShareID        *string             `json:"ShareId"`
	SharedWith     *string             `json:"SharedWith"`
	Status         *ShareStatusEnum    `json:"Status"`
}
