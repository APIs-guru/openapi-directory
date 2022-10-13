from dataclasses import dataclass, field
from typing import Enum

class FrequencyEnum(str, Enum):
    ONCE = "ONCE"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    EVENT = "EVENT"
    IN_APP_EVENT = "IN_APP_EVENT"

