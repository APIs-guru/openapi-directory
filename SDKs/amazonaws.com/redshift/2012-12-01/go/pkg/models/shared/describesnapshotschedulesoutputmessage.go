package shared

type DescribeSnapshotSchedulesOutputMessage struct {
	Marker            *string
	SnapshotSchedules []SnapshotSchedule
}
