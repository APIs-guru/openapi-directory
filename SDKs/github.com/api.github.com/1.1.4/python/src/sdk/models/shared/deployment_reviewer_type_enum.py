from dataclasses import dataclass, field
from enum import Enum

class DeploymentReviewerTypeEnum(str, Enum):
    USER = "User"
    TEAM = "Team"

