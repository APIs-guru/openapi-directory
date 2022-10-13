package shared

type ConfigRoomRequestNewGroupMemberAcceptanceEnum string

const (
	ConfigRoomRequestNewGroupMemberAcceptanceEnumAutoallow ConfigRoomRequestNewGroupMemberAcceptanceEnum = "autoallow"
	ConfigRoomRequestNewGroupMemberAcceptanceEnumPending   ConfigRoomRequestNewGroupMemberAcceptanceEnum = "pending"
)

type ConfigRoomRequest struct {
	AdminGroupIds             []int64                                        `json:"adminGroupIds"`
	AdminIds                  []int64                                        `json:"adminIds"`
	Classification            *int32                                         `json:"classification"`
	HasActivitiesLog          *bool                                          `json:"hasActivitiesLog"`
	HasRecycleBin             *bool                                          `json:"hasRecycleBin"`
	InheritPermissions        *bool                                          `json:"inheritPermissions"`
	NewGroupMemberAcceptance  *ConfigRoomRequestNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance"`
	RecycleBinRetentionPeriod *int32                                         `json:"recycleBinRetentionPeriod"`
	TakeOverPermissions       *bool                                          `json:"takeOverPermissions"`
}
