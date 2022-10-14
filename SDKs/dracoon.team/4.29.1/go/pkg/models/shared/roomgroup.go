package shared

type RoomGroupNewGroupMemberAcceptanceEnum string

const (
	RoomGroupNewGroupMemberAcceptanceEnumAutoallow RoomGroupNewGroupMemberAcceptanceEnum = "autoallow"
	RoomGroupNewGroupMemberAcceptanceEnumPending   RoomGroupNewGroupMemberAcceptanceEnum = "pending"
)

type RoomGroup struct {
	ID                       int64                                  `json:"id"`
	IsGranted                bool                                   `json:"isGranted"`
	Name                     string                                 `json:"name"`
	NewGroupMemberAcceptance *RoomGroupNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance,omitempty"`
	Permissions              *NodePermissions                       `json:"permissions,omitempty"`
}
