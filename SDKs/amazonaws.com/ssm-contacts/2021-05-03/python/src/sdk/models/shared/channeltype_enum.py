from dataclasses import dataclass, field
from typing import Enum

class ChannelTypeEnum(str, Enum):
    SMS = "SMS"
    VOICE = "VOICE"
    EMAIL = "EMAIL"

