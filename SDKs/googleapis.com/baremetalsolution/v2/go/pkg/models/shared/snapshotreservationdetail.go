package shared

type SnapshotReservationDetail struct {
	ReservedSpaceGib          *string `json:"reservedSpaceGib"`
	ReservedSpacePercent      *int32  `json:"reservedSpacePercent"`
	ReservedSpaceRemainingGib *string `json:"reservedSpaceRemainingGib"`
	ReservedSpaceUsedPercent  *int32  `json:"reservedSpaceUsedPercent"`
}
