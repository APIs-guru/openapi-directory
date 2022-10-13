package shared

type DistrictStatusStateEnum string

const (
	DistrictStatusStateEnumRunning DistrictStatusStateEnum = "running"
	DistrictStatusStateEnumPending DistrictStatusStateEnum = "pending"
	DistrictStatusStateEnumError   DistrictStatusStateEnum = "error"
	DistrictStatusStateEnumPaused  DistrictStatusStateEnum = "paused"
)

type DistrictStatus struct {
	Error        *string                  `json:"error"`
	ID           *string                  `json:"id"`
	InstantLogin *bool                    `json:"instant_login"`
	LastSync     *string                  `json:"last_sync"`
	LaunchDate   *string                  `json:"launch_date"`
	PauseEnd     *string                  `json:"pause_end"`
	PauseStart   *string                  `json:"pause_start"`
	SisType      *string                  `json:"sis_type"`
	State        *DistrictStatusStateEnum `json:"state"`
}
