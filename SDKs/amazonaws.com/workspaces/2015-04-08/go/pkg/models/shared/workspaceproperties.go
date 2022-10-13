package shared

type WorkspaceProperties struct {
	ComputeTypeName                     *ComputeEnum     `json:"ComputeTypeName"`
	RootVolumeSizeGib                   *int64           `json:"RootVolumeSizeGib"`
	RunningMode                         *RunningModeEnum `json:"RunningMode"`
	RunningModeAutoStopTimeoutInMinutes *int64           `json:"RunningModeAutoStopTimeoutInMinutes"`
	UserVolumeSizeGib                   *int64           `json:"UserVolumeSizeGib"`
}
