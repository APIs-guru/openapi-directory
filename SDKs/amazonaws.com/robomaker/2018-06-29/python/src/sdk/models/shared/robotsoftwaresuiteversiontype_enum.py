from dataclasses import dataclass, field
from typing import Enum

class RobotSoftwareSuiteVersionTypeEnum(str, Enum):
    KINETIC = "Kinetic"
    MELODIC = "Melodic"
    DASHING = "Dashing"
    FOXY = "Foxy"

