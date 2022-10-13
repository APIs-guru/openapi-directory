package shared

type RobotDeploymentStepEnum string

const (
	RobotDeploymentStepEnumValidating                 RobotDeploymentStepEnum = "Validating"
	RobotDeploymentStepEnumDownloadingExtracting      RobotDeploymentStepEnum = "DownloadingExtracting"
	RobotDeploymentStepEnumExecutingDownloadCondition RobotDeploymentStepEnum = "ExecutingDownloadCondition"
	RobotDeploymentStepEnumExecutingPreLaunch         RobotDeploymentStepEnum = "ExecutingPreLaunch"
	RobotDeploymentStepEnumLaunching                  RobotDeploymentStepEnum = "Launching"
	RobotDeploymentStepEnumExecutingPostLaunch        RobotDeploymentStepEnum = "ExecutingPostLaunch"
	RobotDeploymentStepEnumFinished                   RobotDeploymentStepEnum = "Finished"
)
