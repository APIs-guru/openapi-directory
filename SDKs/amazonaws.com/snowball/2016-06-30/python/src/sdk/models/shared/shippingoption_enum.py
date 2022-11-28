from dataclasses import dataclass, field
from enum import Enum

class ShippingOptionEnum(str, Enum):
    SECOND_DAY = "SECOND_DAY"
    NEXT_DAY = "NEXT_DAY"
    EXPRESS = "EXPRESS"
    STANDARD = "STANDARD"

