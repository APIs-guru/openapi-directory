from dataclasses import dataclass, field
from typing import Enum

class TrainingJobEarlyStoppingTypeEnum(str, Enum):
    OFF = "Off"
    AUTO = "Auto"

