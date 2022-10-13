package shared

type AppLaunchStatusEnum string

const (
	AppLaunchStatusEnumReadyForConfiguration   AppLaunchStatusEnum = "READY_FOR_CONFIGURATION"
	AppLaunchStatusEnumConfigurationInProgress AppLaunchStatusEnum = "CONFIGURATION_IN_PROGRESS"
	AppLaunchStatusEnumConfigurationInvalid    AppLaunchStatusEnum = "CONFIGURATION_INVALID"
	AppLaunchStatusEnumReadyForLaunch          AppLaunchStatusEnum = "READY_FOR_LAUNCH"
	AppLaunchStatusEnumValidationInProgress    AppLaunchStatusEnum = "VALIDATION_IN_PROGRESS"
	AppLaunchStatusEnumLaunchPending           AppLaunchStatusEnum = "LAUNCH_PENDING"
	AppLaunchStatusEnumLaunchInProgress        AppLaunchStatusEnum = "LAUNCH_IN_PROGRESS"
	AppLaunchStatusEnumLaunched                AppLaunchStatusEnum = "LAUNCHED"
	AppLaunchStatusEnumPartiallyLaunched       AppLaunchStatusEnum = "PARTIALLY_LAUNCHED"
	AppLaunchStatusEnumDeltaLaunchInProgress   AppLaunchStatusEnum = "DELTA_LAUNCH_IN_PROGRESS"
	AppLaunchStatusEnumDeltaLaunchFailed       AppLaunchStatusEnum = "DELTA_LAUNCH_FAILED"
	AppLaunchStatusEnumLaunchFailed            AppLaunchStatusEnum = "LAUNCH_FAILED"
	AppLaunchStatusEnumTerminateInProgress     AppLaunchStatusEnum = "TERMINATE_IN_PROGRESS"
	AppLaunchStatusEnumTerminateFailed         AppLaunchStatusEnum = "TERMINATE_FAILED"
	AppLaunchStatusEnumTerminated              AppLaunchStatusEnum = "TERMINATED"
)
