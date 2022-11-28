from dataclasses import dataclass, field
from enum import Enum

class ChannelTypeEnum(str, Enum):
    BASIC = "BASIC"
    STANDARD = "STANDARD"

