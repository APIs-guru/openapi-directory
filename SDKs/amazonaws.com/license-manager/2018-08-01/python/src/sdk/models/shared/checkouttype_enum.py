from dataclasses import dataclass, field
from typing import Enum

class CheckoutTypeEnum(str, Enum):
    PROVISIONAL = "PROVISIONAL"
    PERPETUAL = "PERPETUAL"

