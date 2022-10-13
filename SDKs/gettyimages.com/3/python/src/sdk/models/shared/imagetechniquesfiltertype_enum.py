from dataclasses import dataclass, field
from typing import Enum

class ImageTechniquesFilterTypeEnum(str, Enum):
    REALTIME = "realtime"
    TIME_LAPSE = "time_lapse"
    SLOW_MOTION = "slow_motion"
    COLOR = "color"
    BLACK_AND_WHITE = "black_and_white"
    ANIMATION = "animation"
    SELECTIVE_FOCUS = "selective_focus"

