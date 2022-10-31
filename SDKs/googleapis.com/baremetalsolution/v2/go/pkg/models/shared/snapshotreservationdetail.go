package shared



type SnapshotReservationDetail struct {
    ReservedSpaceGib *string `json:"reservedSpaceGib,omitempty"`
    ReservedSpacePercent *int32 `json:"reservedSpacePercent,omitempty"`
    ReservedSpaceRemainingGib *string `json:"reservedSpaceRemainingGib,omitempty"`
    ReservedSpaceUsedPercent *int32 `json:"reservedSpaceUsedPercent,omitempty"`
    
}

