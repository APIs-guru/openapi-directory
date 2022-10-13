from dataclasses import dataclass, field
from typing import Enum

class RobotSoftwareSuiteTypeEnum(str, Enum):
    ROS = "ROS"
    ROS2 = "ROS2"

