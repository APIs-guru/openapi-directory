from dataclasses import dataclass, field
from typing import Enum

class NetworkProtocolEnum(str, Enum):
    TCP = "tcp"
    ALL = "all"
    UDP = "udp"
    ICMP = "icmp"

