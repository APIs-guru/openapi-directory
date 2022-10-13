package shared

type WorkloadShare struct {
	PermissionType *PermissionTypeEnum `json:"PermissionType"`
	ShareID        *string             `json:"ShareId"`
	SharedBy       *string             `json:"SharedBy"`
	SharedWith     *string             `json:"SharedWith"`
	Status         *ShareStatusEnum    `json:"Status"`
	WorkloadID     *string             `json:"WorkloadId"`
	WorkloadName   *string             `json:"WorkloadName"`
}
