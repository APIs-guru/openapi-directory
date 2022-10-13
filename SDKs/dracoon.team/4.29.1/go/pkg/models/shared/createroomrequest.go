package shared

import (
	"time"
)

type CreateRoomRequestNewGroupMemberAcceptanceEnum string

const (
	CreateRoomRequestNewGroupMemberAcceptanceEnumAutoallow CreateRoomRequestNewGroupMemberAcceptanceEnum = "autoallow"
	CreateRoomRequestNewGroupMemberAcceptanceEnumPending   CreateRoomRequestNewGroupMemberAcceptanceEnum = "pending"
)

type CreateRoomRequest struct {
	AdminGroupIds             []int64                                        `json:"adminGroupIds"`
	AdminIds                  []int64                                        `json:"adminIds"`
	Classification            *int32                                         `json:"classification"`
	HasActivitiesLog          *bool                                          `json:"hasActivitiesLog"`
	HasRecycleBin             *bool                                          `json:"hasRecycleBin"`
	InheritPermissions        *bool                                          `json:"inheritPermissions"`
	Name                      string                                         `json:"name"`
	NewGroupMemberAcceptance  *CreateRoomRequestNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance"`
	Notes                     *string                                        `json:"notes"`
	ParentID                  *int64                                         `json:"parentId"`
	Quota                     *int64                                         `json:"quota"`
	RecycleBinRetentionPeriod *int32                                         `json:"recycleBinRetentionPeriod"`
	TimestampCreation         *time.Time                                     `json:"timestampCreation"`
	TimestampModification     *time.Time                                     `json:"timestampModification"`
}
