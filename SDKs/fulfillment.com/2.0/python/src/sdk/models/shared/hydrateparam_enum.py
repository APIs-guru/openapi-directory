from dataclasses import dataclass, field
from typing import Enum

class HydrateParamEnum(str, Enum):
    INTEGRATOR = "integrator"
    LINE_ITEMS = "lineItems"
    TRACKING_NUMBERS_CARRIER = "trackingNumbers.carrier"

