from dataclasses import dataclass, field
from enum import Enum

class UsageLimitPeriodEnum(str, Enum):
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"

