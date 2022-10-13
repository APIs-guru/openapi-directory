from dataclasses import dataclass, field
from typing import Enum

class EmotionNameEnum(str, Enum):
    HAPPY = "HAPPY"
    SAD = "SAD"
    ANGRY = "ANGRY"
    CONFUSED = "CONFUSED"
    DISGUSTED = "DISGUSTED"
    SURPRISED = "SURPRISED"
    CALM = "CALM"
    UNKNOWN = "UNKNOWN"
    FEAR = "FEAR"

