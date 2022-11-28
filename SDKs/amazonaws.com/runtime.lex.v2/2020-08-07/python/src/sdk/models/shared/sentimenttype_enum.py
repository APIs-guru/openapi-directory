from dataclasses import dataclass, field
from enum import Enum

class SentimentTypeEnum(str, Enum):
    MIXED = "MIXED"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    POSITIVE = "POSITIVE"

