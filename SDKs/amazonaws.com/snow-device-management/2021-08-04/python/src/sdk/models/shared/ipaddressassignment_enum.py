from dataclasses import dataclass, field
from typing import Enum

class IPAddressAssignmentEnum(str, Enum):
    DHCP = "DHCP"
    STATIC = "STATIC"

