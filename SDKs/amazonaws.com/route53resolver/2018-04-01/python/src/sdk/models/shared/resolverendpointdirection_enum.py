from dataclasses import dataclass, field
from enum import Enum

class ResolverEndpointDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

