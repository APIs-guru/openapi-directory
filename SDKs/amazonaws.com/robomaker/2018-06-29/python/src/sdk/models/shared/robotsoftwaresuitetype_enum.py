from dataclasses import dataclass, field
from enum import Enum

class RobotSoftwareSuiteTypeEnum(str, Enum):
    ROS = "ROS"
    ROS2 = "ROS2"

