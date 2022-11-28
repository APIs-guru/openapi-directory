from dataclasses import dataclass, field
from enum import Enum

class DeploymentJobErrorCodeEnum(str, Enum):
    RESOURCE_NOT_FOUND = "ResourceNotFound"
    ENVIRONMENT_SETUP_ERROR = "EnvironmentSetupError"
    ETAG_MISMATCH = "EtagMismatch"
    FAILURE_THRESHOLD_BREACHED = "FailureThresholdBreached"
    ROBOT_DEPLOYMENT_ABORTED = "RobotDeploymentAborted"
    ROBOT_DEPLOYMENT_NO_RESPONSE = "RobotDeploymentNoResponse"
    ROBOT_AGENT_CONNECTION_TIMEOUT = "RobotAgentConnectionTimeout"
    GREENGRASS_DEPLOYMENT_FAILED = "GreengrassDeploymentFailed"
    INVALID_GREENGRASS_GROUP = "InvalidGreengrassGroup"
    MISSING_ROBOT_ARCHITECTURE = "MissingRobotArchitecture"
    MISSING_ROBOT_APPLICATION_ARCHITECTURE = "MissingRobotApplicationArchitecture"
    MISSING_ROBOT_DEPLOYMENT_RESOURCE = "MissingRobotDeploymentResource"
    GREENGRASS_GROUP_VERSION_DOES_NOT_EXIST = "GreengrassGroupVersionDoesNotExist"
    LAMBDA_DELETED = "LambdaDeleted"
    EXTRACTING_BUNDLE_FAILURE = "ExtractingBundleFailure"
    PRE_LAUNCH_FILE_FAILURE = "PreLaunchFileFailure"
    POST_LAUNCH_FILE_FAILURE = "PostLaunchFileFailure"
    BAD_PERMISSION_ERROR = "BadPermissionError"
    DOWNLOAD_CONDITION_FAILED = "DownloadConditionFailed"
    BAD_LAMBDA_ASSOCIATED = "BadLambdaAssociated"
    INTERNAL_SERVER_ERROR = "InternalServerError"
    ROBOT_APPLICATION_DOES_NOT_EXIST = "RobotApplicationDoesNotExist"
    DEPLOYMENT_FLEET_DOES_NOT_EXIST = "DeploymentFleetDoesNotExist"
    FLEET_DEPLOYMENT_TIMEOUT = "FleetDeploymentTimeout"

