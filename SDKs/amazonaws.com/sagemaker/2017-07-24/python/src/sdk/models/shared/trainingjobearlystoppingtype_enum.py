from dataclasses import dataclass, field
from enum import Enum

class TrainingJobEarlyStoppingTypeEnum(str, Enum):
    OFF = "Off"
    AUTO = "Auto"

