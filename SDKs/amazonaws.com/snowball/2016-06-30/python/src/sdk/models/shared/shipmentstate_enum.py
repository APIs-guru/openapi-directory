from dataclasses import dataclass, field
from typing import Enum

class ShipmentStateEnum(str, Enum):
    RECEIVED = "RECEIVED"
    RETURNED = "RETURNED"

