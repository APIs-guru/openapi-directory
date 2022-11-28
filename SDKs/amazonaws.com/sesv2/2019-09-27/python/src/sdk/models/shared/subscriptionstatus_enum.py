from dataclasses import dataclass, field
from enum import Enum

class SubscriptionStatusEnum(str, Enum):
    OPT_IN = "OPT_IN"
    OPT_OUT = "OPT_OUT"

