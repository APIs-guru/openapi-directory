from dataclasses import dataclass, field
from typing import Enum

class RobotStatusEnum(str, Enum):
    AVAILABLE = "Available"
    REGISTERED = "Registered"
    PENDING_NEW_DEPLOYMENT = "PendingNewDeployment"
    DEPLOYING = "Deploying"
    FAILED = "Failed"
    IN_SYNC = "InSync"
    NO_RESPONSE = "NoResponse"

