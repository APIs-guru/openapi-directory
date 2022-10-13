from dataclasses import dataclass, field
from typing import Enum

class TrafficRoutingConfigTypeEnum(str, Enum):
    ALL_AT_ONCE = "ALL_AT_ONCE"
    CANARY = "CANARY"

