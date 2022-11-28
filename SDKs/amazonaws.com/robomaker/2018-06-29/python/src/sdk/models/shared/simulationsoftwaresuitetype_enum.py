from dataclasses import dataclass, field
from enum import Enum

class SimulationSoftwareSuiteTypeEnum(str, Enum):
    GAZEBO = "Gazebo"
    ROSBAG_PLAY = "RosbagPlay"

