package shared

type RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum string

const (
	RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumAutoallow RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum = "autoallow"
	RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumPending   RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum = "pending"
)

// RoomGroupsAddBatchRequestItem
// Request item model for granting group to the room
type RoomGroupsAddBatchRequestItem struct {
	ID                       int64                                                      `json:"id"`
	NewGroupMemberAcceptance *RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance,omitempty"`
	Permissions              NodePermissions                                            `json:"permissions"`
}
