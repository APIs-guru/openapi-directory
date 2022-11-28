from dataclasses import dataclass, field
from enum import Enum

class SentimentValueEnum(str, Enum):
    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    MIXED = "MIXED"

