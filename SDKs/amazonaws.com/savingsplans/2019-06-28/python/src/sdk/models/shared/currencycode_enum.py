from dataclasses import dataclass, field
from enum import Enum

class CurrencyCodeEnum(str, Enum):
    CNY = "CNY"
    USD = "USD"

