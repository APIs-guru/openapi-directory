from dataclasses import dataclass, field
from typing import Enum

class LongTermPricingTypeEnum(str, Enum):
    ONE_YEAR = "OneYear"
    THREE_YEAR = "ThreeYear"

