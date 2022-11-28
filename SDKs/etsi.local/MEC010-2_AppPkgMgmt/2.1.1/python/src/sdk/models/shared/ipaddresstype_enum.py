from dataclasses import dataclass, field
from enum import Enum

class IPAddressTypeEnum(str, Enum):
    IP_V6 = "IP_V6"
    IP_V4 = "IP_V4"

