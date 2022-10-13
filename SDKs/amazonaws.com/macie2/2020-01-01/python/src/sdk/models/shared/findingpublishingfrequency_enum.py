from dataclasses import dataclass, field
from typing import Enum

class FindingPublishingFrequencyEnum(str, Enum):
    FIFTEEN_MINUTES = "FIFTEEN_MINUTES"
    ONE_HOUR = "ONE_HOUR"
    SIX_HOURS = "SIX_HOURS"

