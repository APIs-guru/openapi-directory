package shared

type DeploymentJobErrorCodeEnum string

const (
	DeploymentJobErrorCodeEnumResourceNotFound                    DeploymentJobErrorCodeEnum = "ResourceNotFound"
	DeploymentJobErrorCodeEnumEnvironmentSetupError               DeploymentJobErrorCodeEnum = "EnvironmentSetupError"
	DeploymentJobErrorCodeEnumEtagMismatch                        DeploymentJobErrorCodeEnum = "EtagMismatch"
	DeploymentJobErrorCodeEnumFailureThresholdBreached            DeploymentJobErrorCodeEnum = "FailureThresholdBreached"
	DeploymentJobErrorCodeEnumRobotDeploymentAborted              DeploymentJobErrorCodeEnum = "RobotDeploymentAborted"
	DeploymentJobErrorCodeEnumRobotDeploymentNoResponse           DeploymentJobErrorCodeEnum = "RobotDeploymentNoResponse"
	DeploymentJobErrorCodeEnumRobotAgentConnectionTimeout         DeploymentJobErrorCodeEnum = "RobotAgentConnectionTimeout"
	DeploymentJobErrorCodeEnumGreengrassDeploymentFailed          DeploymentJobErrorCodeEnum = "GreengrassDeploymentFailed"
	DeploymentJobErrorCodeEnumInvalidGreengrassGroup              DeploymentJobErrorCodeEnum = "InvalidGreengrassGroup"
	DeploymentJobErrorCodeEnumMissingRobotArchitecture            DeploymentJobErrorCodeEnum = "MissingRobotArchitecture"
	DeploymentJobErrorCodeEnumMissingRobotApplicationArchitecture DeploymentJobErrorCodeEnum = "MissingRobotApplicationArchitecture"
	DeploymentJobErrorCodeEnumMissingRobotDeploymentResource      DeploymentJobErrorCodeEnum = "MissingRobotDeploymentResource"
	DeploymentJobErrorCodeEnumGreengrassGroupVersionDoesNotExist  DeploymentJobErrorCodeEnum = "GreengrassGroupVersionDoesNotExist"
	DeploymentJobErrorCodeEnumLambdaDeleted                       DeploymentJobErrorCodeEnum = "LambdaDeleted"
	DeploymentJobErrorCodeEnumExtractingBundleFailure             DeploymentJobErrorCodeEnum = "ExtractingBundleFailure"
	DeploymentJobErrorCodeEnumPreLaunchFileFailure                DeploymentJobErrorCodeEnum = "PreLaunchFileFailure"
	DeploymentJobErrorCodeEnumPostLaunchFileFailure               DeploymentJobErrorCodeEnum = "PostLaunchFileFailure"
	DeploymentJobErrorCodeEnumBadPermissionError                  DeploymentJobErrorCodeEnum = "BadPermissionError"
	DeploymentJobErrorCodeEnumDownloadConditionFailed             DeploymentJobErrorCodeEnum = "DownloadConditionFailed"
	DeploymentJobErrorCodeEnumBadLambdaAssociated                 DeploymentJobErrorCodeEnum = "BadLambdaAssociated"
	DeploymentJobErrorCodeEnumInternalServerError                 DeploymentJobErrorCodeEnum = "InternalServerError"
	DeploymentJobErrorCodeEnumRobotApplicationDoesNotExist        DeploymentJobErrorCodeEnum = "RobotApplicationDoesNotExist"
	DeploymentJobErrorCodeEnumDeploymentFleetDoesNotExist         DeploymentJobErrorCodeEnum = "DeploymentFleetDoesNotExist"
	DeploymentJobErrorCodeEnumFleetDeploymentTimeout              DeploymentJobErrorCodeEnum = "FleetDeploymentTimeout"
)
