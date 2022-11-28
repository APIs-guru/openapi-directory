from dataclasses import dataclass, field
from enum import Enum

class PaymentUnitEnum(str, Enum):
    HOUR = "hour"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    PAYCHECK = "paycheck"

