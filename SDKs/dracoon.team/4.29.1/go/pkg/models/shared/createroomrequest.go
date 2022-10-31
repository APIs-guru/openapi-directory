package shared

import (
"time")


type CreateRoomRequestNewGroupMemberAcceptanceEnum string

const (
    CreateRoomRequestNewGroupMemberAcceptanceEnumAutoallow CreateRoomRequestNewGroupMemberAcceptanceEnum = "autoallow"
CreateRoomRequestNewGroupMemberAcceptanceEnumPending CreateRoomRequestNewGroupMemberAcceptanceEnum = "pending"
)


type CreateRoomRequest struct {
    AdminGroupIds []int64 `json:"adminGroupIds,omitempty"`
    AdminIds []int64 `json:"adminIds,omitempty"`
    Classification *int32 `json:"classification,omitempty"`
    HasActivitiesLog *bool `json:"hasActivitiesLog,omitempty"`
    HasRecycleBin *bool `json:"hasRecycleBin,omitempty"`
    InheritPermissions *bool `json:"inheritPermissions,omitempty"`
    Name string `json:"name"`
    NewGroupMemberAcceptance *CreateRoomRequestNewGroupMemberAcceptanceEnum `json:"newGroupMemberAcceptance,omitempty"`
    Notes *string `json:"notes,omitempty"`
    ParentID *int64 `json:"parentId,omitempty"`
    Quota *int64 `json:"quota,omitempty"`
    RecycleBinRetentionPeriod *int32 `json:"recycleBinRetentionPeriod,omitempty"`
    TimestampCreation *time.Time `json:"timestampCreation,omitempty"`
    TimestampModification *time.Time `json:"timestampModification,omitempty"`
    
}

