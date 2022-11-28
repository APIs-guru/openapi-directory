from dataclasses import dataclass, field
from enum import Enum

class ShipmentStateEnum(str, Enum):
    RECEIVED = "RECEIVED"
    RETURNED = "RETURNED"

