from dataclasses import dataclass, field
from typing import Enum

class RoutingPolicyEnum(str, Enum):
    MULTIVALUE = "MULTIVALUE"
    WEIGHTED = "WEIGHTED"

