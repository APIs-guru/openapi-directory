from dataclasses import dataclass, field
from typing import Enum

class ViewpointsFilterTypeEnum(str, Enum):
    LOCKDOWN = "lockdown"
    PANNING = "panning"
    TRACKING_SHOT = "tracking_shot"
    AERIAL_VIEW = "aerial_view"
    HIGH_ANGLE_VIEW = "high_angle_view"
    LOW_ANGLE_VIEW = "low_angle_view"
    TILT = "tilt"
    POINT_OF_VIEW = "point_of_view"

