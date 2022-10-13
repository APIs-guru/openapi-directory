from dataclasses import dataclass, field
from typing import Enum

class RoutingControlStateEnum(str, Enum):
    ON = "On"
    OFF = "Off"

