package shared

type RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum string

const (
	RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumAutoallow RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum = "autoallow"
	RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumPending   RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum = "pending"
)

type RoomGroupsAddBatchRequestItem struct {
	ID                       int64                                                      `json:"id"`
	NewGroupMemberAcceptance *RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance,omitempty"`
	Permissions              NodePermissions                                            `json:"permissions"`
}
