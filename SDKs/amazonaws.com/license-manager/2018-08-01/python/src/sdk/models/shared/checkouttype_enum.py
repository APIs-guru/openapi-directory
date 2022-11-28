from dataclasses import dataclass, field
from enum import Enum

class CheckoutTypeEnum(str, Enum):
    PROVISIONAL = "PROVISIONAL"
    PERPETUAL = "PERPETUAL"

