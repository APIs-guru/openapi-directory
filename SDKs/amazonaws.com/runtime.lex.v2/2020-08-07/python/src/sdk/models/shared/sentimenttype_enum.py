from dataclasses import dataclass, field
from typing import Enum

class SentimentTypeEnum(str, Enum):
    MIXED = "MIXED"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    POSITIVE = "POSITIVE"

