from dataclasses import dataclass, field
from typing import Enum

class DeploymentReviewerTypeEnum(str, Enum):
    USER = "User"
    TEAM = "Team"

