from dataclasses import dataclass, field
from typing import Enum

class VideoAspectRatioFilterTypeEnum(str, Enum):
    SIXTEEN_9 = "16:9"
    NINE_16 = "9:16"
    THREE_4 = "3:4"
    FOUR_3 = "4:3"
    FOUR_5 = "4:5"
    TWO_1 = "2:1"
    SEVENTEEN_9 = "17:9"
    NINE_17 = "9:17"

