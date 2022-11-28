package shared

// SnapshotReservationDetail
// Details about snapshot space reservation and usage on the storage volume.
type SnapshotReservationDetail struct {
	ReservedSpaceGib          *string `json:"reservedSpaceGib,omitempty"`
	ReservedSpacePercent      *int32  `json:"reservedSpacePercent,omitempty"`
	ReservedSpaceRemainingGib *string `json:"reservedSpaceRemainingGib,omitempty"`
	ReservedSpaceUsedPercent  *int32  `json:"reservedSpaceUsedPercent,omitempty"`
}
