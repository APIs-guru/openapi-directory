from dataclasses import dataclass, field
from enum import Enum

class IPAddressTypeEnum(str, Enum):
    DUALSTACK = "dualstack"
    IPV4 = "ipv4"

