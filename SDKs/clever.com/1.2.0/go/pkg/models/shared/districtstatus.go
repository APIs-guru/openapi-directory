package shared

type DistrictStatusStateEnum string

const (
	DistrictStatusStateEnumRunning DistrictStatusStateEnum = "running"
	DistrictStatusStateEnumPending DistrictStatusStateEnum = "pending"
	DistrictStatusStateEnumError   DistrictStatusStateEnum = "error"
	DistrictStatusStateEnumPaused  DistrictStatusStateEnum = "paused"
)

type DistrictStatus struct {
	Error        *string                  `json:"error,omitempty"`
	ID           *string                  `json:"id,omitempty"`
	InstantLogin *bool                    `json:"instant_login,omitempty"`
	LastSync     *string                  `json:"last_sync,omitempty"`
	LaunchDate   *string                  `json:"launch_date,omitempty"`
	PauseEnd     *string                  `json:"pause_end,omitempty"`
	PauseStart   *string                  `json:"pause_start,omitempty"`
	SisType      *string                  `json:"sis_type,omitempty"`
	State        *DistrictStatusStateEnum `json:"state,omitempty"`
}
