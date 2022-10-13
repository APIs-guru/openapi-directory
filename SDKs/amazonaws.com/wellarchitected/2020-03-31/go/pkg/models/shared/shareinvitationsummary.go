package shared

type ShareInvitationSummary struct {
	PermissionType    *PermissionTypeEnum `json:"PermissionType"`
	ShareInvitationID *string             `json:"ShareInvitationId"`
	SharedBy          *string             `json:"SharedBy"`
	SharedWith        *string             `json:"SharedWith"`
	WorkloadID        *string             `json:"WorkloadId"`
	WorkloadName      *string             `json:"WorkloadName"`
}
