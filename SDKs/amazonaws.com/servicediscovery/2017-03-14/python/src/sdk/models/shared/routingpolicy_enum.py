from dataclasses import dataclass, field
from enum import Enum

class RoutingPolicyEnum(str, Enum):
    MULTIVALUE = "MULTIVALUE"
    WEIGHTED = "WEIGHTED"

