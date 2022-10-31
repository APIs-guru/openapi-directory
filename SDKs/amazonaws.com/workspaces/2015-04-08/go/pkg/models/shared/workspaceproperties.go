package shared

type WorkspaceProperties struct {
	ComputeTypeName                     *ComputeEnum     `json:"ComputeTypeName,omitempty"`
	RootVolumeSizeGib                   *int64           `json:"RootVolumeSizeGib,omitempty"`
	RunningMode                         *RunningModeEnum `json:"RunningMode,omitempty"`
	RunningModeAutoStopTimeoutInMinutes *int64           `json:"RunningModeAutoStopTimeoutInMinutes,omitempty"`
	UserVolumeSizeGib                   *int64           `json:"UserVolumeSizeGib,omitempty"`
}
