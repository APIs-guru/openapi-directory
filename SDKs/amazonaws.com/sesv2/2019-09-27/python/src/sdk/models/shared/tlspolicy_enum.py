from dataclasses import dataclass, field
from enum import Enum

class TLSPolicyEnum(str, Enum):
    REQUIRE = "REQUIRE"
    OPTIONAL = "OPTIONAL"

