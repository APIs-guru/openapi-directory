package shared

type RecordingConfigurationStateEnum string

const (
	RecordingConfigurationStateEnumCreating     RecordingConfigurationStateEnum = "CREATING"
	RecordingConfigurationStateEnumCreateFailed RecordingConfigurationStateEnum = "CREATE_FAILED"
	RecordingConfigurationStateEnumActive       RecordingConfigurationStateEnum = "ACTIVE"
)
