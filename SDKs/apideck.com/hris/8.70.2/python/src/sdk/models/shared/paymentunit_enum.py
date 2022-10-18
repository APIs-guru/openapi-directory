from dataclasses import dataclass, field
from typing import Enum

class PaymentUnitEnum(str, Enum):
    HOUR = "hour"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    PAYCHECK = "paycheck"

