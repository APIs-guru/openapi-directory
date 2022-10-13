from dataclasses import dataclass, field
from typing import Enum

class ResolverEndpointDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

