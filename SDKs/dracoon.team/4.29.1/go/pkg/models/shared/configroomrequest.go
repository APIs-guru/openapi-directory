package shared

type ConfigRoomRequestNewGroupMemberAcceptanceEnum string

const (
	ConfigRoomRequestNewGroupMemberAcceptanceEnumAutoallow ConfigRoomRequestNewGroupMemberAcceptanceEnum = "autoallow"
	ConfigRoomRequestNewGroupMemberAcceptanceEnumPending   ConfigRoomRequestNewGroupMemberAcceptanceEnum = "pending"
)

type ConfigRoomRequest struct {
	AdminGroupIds             []int64                                        `json:"adminGroupIds,omitempty"`
	AdminIds                  []int64                                        `json:"adminIds,omitempty"`
	Classification            *int32                                         `json:"classification,omitempty"`
	HasActivitiesLog          *bool                                          `json:"hasActivitiesLog,omitempty"`
	HasRecycleBin             *bool                                          `json:"hasRecycleBin,omitempty"`
	InheritPermissions        *bool                                          `json:"inheritPermissions,omitempty"`
	NewGroupMemberAcceptance  *ConfigRoomRequestNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance,omitempty"`
	RecycleBinRetentionPeriod *int32                                         `json:"recycleBinRetentionPeriod,omitempty"`
	TakeOverPermissions       *bool                                          `json:"takeOverPermissions,omitempty"`
}
