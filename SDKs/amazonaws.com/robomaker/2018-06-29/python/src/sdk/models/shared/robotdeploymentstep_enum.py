from dataclasses import dataclass, field
from enum import Enum

class RobotDeploymentStepEnum(str, Enum):
    VALIDATING = "Validating"
    DOWNLOADING_EXTRACTING = "DownloadingExtracting"
    EXECUTING_DOWNLOAD_CONDITION = "ExecutingDownloadCondition"
    EXECUTING_PRE_LAUNCH = "ExecutingPreLaunch"
    LAUNCHING = "Launching"
    EXECUTING_POST_LAUNCH = "ExecutingPostLaunch"
    FINISHED = "Finished"

