package shared

type ShareInvitationSummary struct {
	PermissionType    *PermissionTypeEnum `json:"PermissionType,omitempty"`
	ShareInvitationID *string             `json:"ShareInvitationId,omitempty"`
	SharedBy          *string             `json:"SharedBy,omitempty"`
	SharedWith        *string             `json:"SharedWith,omitempty"`
	WorkloadID        *string             `json:"WorkloadId,omitempty"`
	WorkloadName      *string             `json:"WorkloadName,omitempty"`
}
