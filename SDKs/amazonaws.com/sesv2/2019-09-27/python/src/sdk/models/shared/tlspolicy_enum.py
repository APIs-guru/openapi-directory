from dataclasses import dataclass, field
from typing import Enum

class TLSPolicyEnum(str, Enum):
    REQUIRE = "REQUIRE"
    OPTIONAL = "OPTIONAL"

