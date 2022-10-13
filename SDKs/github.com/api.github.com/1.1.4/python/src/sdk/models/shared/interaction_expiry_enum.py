from dataclasses import dataclass, field
from typing import Enum

class InteractionExpiryEnum(str, Enum):
    ONE_DAY = "one_day"
    THREE_DAYS = "three_days"
    ONE_WEEK = "one_week"
    ONE_MONTH = "one_month"
    SIX_MONTHS = "six_months"

