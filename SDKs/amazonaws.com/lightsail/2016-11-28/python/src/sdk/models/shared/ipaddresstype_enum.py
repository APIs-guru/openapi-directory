from dataclasses import dataclass, field
from typing import Enum

class IPAddressTypeEnum(str, Enum):
    DUALSTACK = "dualstack"
    IPV4 = "ipv4"

