from dataclasses import dataclass, field
from typing import Enum

class CurrencyCodeEnum(str, Enum):
    CNY = "CNY"
    USD = "USD"

