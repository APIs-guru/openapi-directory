from dataclasses import dataclass, field
from typing import Enum

class SimulationSoftwareSuiteTypeEnum(str, Enum):
    GAZEBO = "Gazebo"
    ROSBAG_PLAY = "RosbagPlay"

